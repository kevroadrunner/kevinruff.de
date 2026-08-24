<script lang="ts">
  import title from '$lib/title';
  import { Card } from '$lib/components/ui/card';
  import Git from '@iconify-svelte/simple-icons/git';
  import Homebrew from '@iconify-svelte/simple-icons/homebrew';
  import Iterm2 from '@iconify-svelte/simple-icons/iterm2';
  import Linux from '@iconify-svelte/simple-icons/linux';
  import Macos from '@iconify-svelte/simple-icons/macos';
  import Pnpm from '@iconify-svelte/simple-icons/pnpm';
  import Postman from '@iconify-svelte/simple-icons/postman';
  import Webstorm from '@iconify-svelte/simple-icons/webstorm';
  import Terminal from '@iconify-svelte/mdi/console';
  import Nvm from '@iconify-svelte/simple-icons/nvm';

  const tools = [
    { name: 'WebStorm', icon: Webstorm, size: 'large' },
    { name: 'Git', icon: Git, size: 'default' },
    { name: 'pnpm', icon: Pnpm, size: 'default' },
    { name: 'SSH', icon: Terminal, size: 'default' },
    { name: 'Oh My Zsh', icon: Terminal, size: 'default' },
    { name: 'macOS', icon: Macos, size: 'large' },
    { name: 'nvm', icon: Nvm, size: 'default' },
    { name: 'iTerm2', icon: Iterm2, size: 'large' },
    { name: 'Linux', icon: Linux, size: 'default' },
    { name: 'Postman', icon: Postman, size: 'default' },
    { name: 'Homebrew', icon: Homebrew, size: 'default' }
  ];
</script>

<svelte:head>
  <title>{title('Tools')}</title>
  <meta name="description" content="Tools I reach for when building software" />
</svelte:head>

<section class="mx-auto max-w-5xl space-y-10 py-16">
  <header class="space-y-3">
    <h1 class="text-4xl font-semibold tracking-tight">Tools</h1>
    <p class="max-w-xl text-lg text-muted-foreground">
      My daily companions.
    </p>
  </header>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-5">
    {#each tools as Tool (Tool.name)}
      <Card
          class={[
          'group flex min-h-40 flex-col justify-between p-6 transition-colors',
          'hover:bg-muted/50',
          Tool.size === 'large' && 'md:col-span-2 md:row-span-2 md:min-h-84'
        ]}
      >
        <div class="flex size-12 items-center justify-center">
          <Tool.icon class="size-10 text-muted-foreground transition-all group-hover:scale-110 group-hover:text-primary" />
        </div>
        <div>
          <h2 class="text-lg font-medium">{Tool.name}</h2>
        </div>
      </Card>
    {/each}
  </div>
</section>