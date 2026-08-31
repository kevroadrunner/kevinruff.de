<script lang="ts">
  import { resolve } from '$app/paths';
  import { Button } from '$lib/components/ui/button';
  import KeyboardArrowUp from '@iconify-svelte/mdi/keyboard-arrow-up';
  import KeyboardArrowDown from '@iconify-svelte/mdi/keyboard-arrow-down';
  import KeyboardEsc from '@iconify-svelte/mdi/keyboard-esc';
  import KeyboardTab from '@iconify-svelte/mdi/keyboard-tab';
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import title from '$lib/title';
  import { onMount } from 'svelte';
  import type { RouteId } from '$app/types';

  type StatusContent = {
    title: string;
    message: string;
    hint: string;
  };

  const statusMap: Record<string, StatusContent> = {
    '404': {
      title: 'Well, this is awkward',
      message: "I couldn't find the page you're' looking for.",
      hint: 'I did find some other things, though.',
    },
    '500': {
      title: 'Well, that escalated quickly',
      message: 'Something went wrong on my end.',
      hint: "Let's pretend this never happened.",
    },
  };

  const routes: RouteId[] = ['/about', /*'/code',*/ '/tools'];

  const commands = {
    help: [
      'Available commands:',
      '  cd <path> Go somewhere',
      '  ls  List available pages',
      '  pwd Print current path',
      '  clear Clear terminal',
      '  help Show this message',
    ],
    ls: routes,
    pwd: [`/${page.status}`],
  } satisfies Record<string, string[]>;

  let input = $state('');
  let output = $state<string[]>([]);
  let history = $state<string[]>([]);
  let historyIndex = $state(-1);
  let historyDraft = $state('');
  const status = $derived(page.status);
  const errorContent = $derived<StatusContent>(
    statusMap[status.toString()] || {
      title: 'Something went terribly wrong',
      message: 'Maybe try again?',
      hint: 'Good luck.',
    }
  );

  const execute = (command: string) => {
    const trimmed = command.trim();
    // Handle blank Enter
    if (!trimmed) {
      appendOutput('$');
      historyIndex = -1;
      historyDraft = '';
      return;
    }
    history = [...history, trimmed];
    historyIndex = -1;
    historyDraft = '';
    const [cmd, ...args] = trimmed.split(/\s+/);
    appendOutput(`$ ${trimmed}`);
    switch (cmd.toLowerCase()) {
      case 'help':
        appendOutput(...commands.help);
        break;
      case 'ls':
        appendOutput(...commands.ls);
        break;
      case 'pwd':
        appendOutput(...commands.pwd);
        break;
      case 'clear':
        output = [];
        break;
      case 'cd': {
        const path = args[0];
        const normalized = path === '~' ? '/' : path;
        if (!normalized) {
          appendOutput('usage: cd <path>');
        } else if (normalized === '/') {
          goto(resolve('/'));
        } else if (routes.includes(normalized as RouteId)) {
          goto(resolve(normalized as RouteId));
        } else {
          appendOutput(`cd: no such directory: ${path}`);
        }
        break;
      }
      default:
        appendOutput(`command not found: ${cmd}`);
    }
    input = '';
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      execute(input);
      historyIndex = -1;
      historyDraft = '';
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (history.length === 0) return;
      if (historyIndex === -1) {
        historyDraft = input;
        historyIndex = history.length - 1;
      } else if (historyIndex > 0) {
        historyIndex--;
      }
      input = history[historyIndex];
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (historyIndex === -1) return;
      if (historyIndex < history.length - 1) {
        historyIndex++;
        input = history[historyIndex];
      } else {
        // Back at the prompt
        historyIndex = -1;
        input = historyDraft;
      }
    } else if (event.key === 'Escape') {
      goto(resolve('/'));
      // FIXME: Very simple autocomplete which handles only paths
    } else if (event.key === 'Tab') {
      event.preventDefault();
      const match = input.match(/^cd\s+(.*)$/);
      if (!match) return;
      const partial = match[1];
      // FIXME: This ignores similar paths
      const matches = routes.filter((route) => route.startsWith(partial));
      if (matches.length === 1) input = `cd ${matches[0]}`;
    }
  };

  let inputElement = $state<HTMLInputElement>();
  let terminalElement = $state<HTMLDivElement>();

  const appendOutput = (...lines: string[]) => {
    output = [...output, ...lines];

    requestAnimationFrame(() => {
      if (terminalElement) {
        terminalElement.scrollTop = terminalElement.scrollHeight;
      }
    });
  };

  onMount(() => {
    inputElement?.focus();
  });
</script>

<svelte:head>
  <title>{title(`${status} • ${errorContent.title}`)}</title>
</svelte:head>

<section class="mx-auto max-w-5xl space-y-10 px-2 py-4 sm:px-8 sm:py-6">
  <header class="space-y-3">
    <div class="text-xl font-bold tracking-tighter text-primary">
      {status}
    </div>
    <h1 class="text-3xl font-semibold tracking-tight">
      {errorContent.title}
    </h1>
    {#if errorContent.message}
      <p class="text-lg text-muted-foreground">
        {errorContent.message}
      </p>
    {/if}
    <p class="text-sm text-muted-foreground">
      {errorContent.hint}
    </p>
  </header>
  <div
    class="overflow-hidden rounded-sm border bg-muted-foreground text-sm text-white/90 shadow-2xl"
  >
    <div class="flex items-center gap-2 border-b border-accent px-2 py-1">
      <span class="size-2.5 rounded-full bg-gray-400"></span>
      <span class="size-2.5 rounded-full bg-gray-400"></span>
      <span class="size-2.5 rounded-full bg-gray-400"></span>
      <span class="ml-1 text-xs">Terminal</span>
    </div>
    <div bind:this={terminalElement} class="h-[30vh] space-y-1 overflow-y-auto p-2 font-mono">
      {#each output as line, i (`${i}.line`)}
        <div>{line}</div>
      {/each}
      <div class="flex">
        <span class="mr-2">$</span>
        <input
          bind:this={inputElement}
          bind:value={input}
          name="command"
          onkeydown={handleKeydown}
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          aria-label="Terminal command"
          class="min-w-0 flex-1 bg-transparent outline-none"
        />
      </div>
    </div>
  </div>
  <div class="flex justify-between text-xs text-muted-foreground">
    <div class="flex items-center gap-1">
      <kbd class="inline-flex size-6 items-center justify-center rounded border">
        <KeyboardArrowUp class="size-4" />
      </kbd>
      <kbd class="inline-flex size-6 items-center justify-center rounded border">
        <KeyboardArrowDown class="size-4" />
      </kbd>
      <span>history</span>
    </div>
    <div class="flex items-center gap-1">
      <kbd class="inline-flex h-6 items-center justify-center rounded border px-1.5">
        <KeyboardTab class="size-4" />
      </kbd>
      <span>complete</span>
    </div>
    <div class="flex items-center gap-1">
      <kbd class="inline-flex size-6 items-center justify-center rounded border">
        <KeyboardEsc class="size-4" />
      </kbd>
      <span>exit</span>
    </div>
    <Button size="sm" href={resolve('/')}>What?!</Button>
  </div>
</section>
