<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import Github from '@iconify-svelte/mdi/github';
  import LinkedIn from '@iconify-svelte/mdi/linkedin';
  import Xing from '@iconify-svelte/mdi/xing';
  import Email from '@iconify-svelte/mdi/email';
  import Star from '@iconify-svelte/mdi/star';
  import ChevronLeft from '@iconify-svelte/mdi/chevron-left';
  import Home from '@iconify-svelte/mdi/home';
  import { Button } from '$lib/components/ui/button';
</script>

<header class="flex items-center justify-between gap-2 p-2 border-b">
  <div class="flex shrink-0 gap-2">
    <Button
      size="icon"
      variant={page.url.pathname === '/' ? 'default' : 'outline'}
      class="transition-colors"
      href={resolve('/')}
    >
      <Home class="size-6" />
    </Button>
    {#if page.url.pathname !== '/'}
      <Button size="icon" href={resolve('/')}>
        <ChevronLeft class="size-6" />
      </Button>
    {/if}
  </div>
  <div class="min-w-0 truncate">Kevin Ruff</div>
  <nav class="flex shrink-0 gap-2">
    <Button size="icon" href="https://github.com/kevroadrunner" target="_blank">
      <Github class="size-6" />
    </Button>
    <Button size="icon" href="https://www.linkedin.com/in/kevin-ruff-sh/" target="_blank">
      <LinkedIn class="size-6" />
    </Button>
    <Button size="icon" href="https://www.xing.com/profile/Kevin_Ruff2/" target="_blank">
      <Xing class="size-6" />
    </Button>
    <Button size="icon" href="mailto:hello@kevinruff.de">
      <Email class="size-6" />
    </Button>
    <Button size="icon" href="https://cv.kevinruff.de/">
      <Star class="size-6" />
    </Button>
  </nav>
</header>
