<script lang="ts">
  import { resolve } from '$app/paths';
  import Github from '@iconify-svelte/mdi/github';
  import LinkedIn from '@iconify-svelte/mdi/linkedin';
  import Xing from '@iconify-svelte/mdi/xing';
  import Email from '@iconify-svelte/mdi/email';
  import Star from '@iconify-svelte/mdi/star';
  import Home from '@iconify-svelte/mdi/home';
  import { Button } from '$lib/components/ui/button';
  import meta from '$lib/data/meta';
</script>

<header class="flex items-center justify-between gap-2 border-b p-2">
  <div class="flex shrink-0 gap-2">
    <Button size="icon" class="transition-colors" href={resolve('/')}>
      <Home class="size-6" />
    </Button>
  </div>
  <div class="min-w-0 truncate">Kevin Ruff</div>
  <nav class="flex shrink-0 gap-2">
    <Button size="icon" href={meta.social.github} target="_blank">
      <Github class="size-6" />
    </Button>
    <Button size="icon" href={meta.social.linkedIn} target="_blank">
      <LinkedIn class="size-6" />
    </Button>
    <Button size="icon" href={meta.social.xing} target="_blank">
      <Xing class="size-6" />
    </Button>
    <Button size="icon" href={`mailto:${meta.contact.email}`}>
      <Email class="size-6" />
    </Button>
    <Button size="icon" href={meta.social.cv}>
      <Star class="size-6" />
    </Button>
  </nav>
</header>
