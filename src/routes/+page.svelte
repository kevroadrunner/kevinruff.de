<script lang="ts">
  import { resolve } from '$app/paths';
  import type { RouteId } from '$app/types';
  import title from '$lib/title';
  import meta from '$lib/data/meta';
  import AboutIcon from '@iconify-svelte/mdi/smiley-kiss-outline';
  import ExperienceIcon from '@iconify-svelte/mdi/briefcase-outline';
  import ProjectsIcon from '@iconify-svelte/mdi/file-document-multiple-outline';
  import SkillsIcon from '@iconify-svelte/mdi/code';
  import ToolsIcon from '@iconify-svelte/mdi/console';

  type NavItem = {
    label: string;
    href: RouteId | string;
    icon: typeof AboutIcon;
  };

  const navItems: NavItem[] = [
    { label: 'About', href: '/about', icon: AboutIcon },
    { label: 'Experience', href: `${meta.social.cv}experience/`, icon: ExperienceIcon },
    { label: 'Projects', href: `${meta.social.cv}projects/`, icon: ProjectsIcon },
    { label: 'Skills', href: `${meta.social.cv}skills/`, icon: SkillsIcon },
    { label: 'Tools', href: '/tools', icon: ToolsIcon },
  ];
</script>

<svelte:head>
  <title>{title()}</title>
  <meta name="description" content={`This is me, ${meta.name}!`} />
</svelte:head>

<section class="flex flex-1 items-center justify-center px-2 py-4 sm:px-8 sm:py-6">
  <nav class="flex min-w-[67vw] flex-col">
    {#each navItems as Link (Link.href)}
      <a
        href={Link.href.startsWith('/') ? resolve(Link.href as RouteId) : Link.href}
        class="flex border-b py-6 transition-colors last:border-0 hover:text-primary sm:py-8"
      >
        <div
          class="flex items-center gap-4 text-4xl font-medium tracking-tight sm:gap-6 sm:text-6xl lg:gap-8 lg:text-7xl"
        >
          <Link.icon class="size-10 sm:size-15 lg:size-18" />
          {Link.label}
        </div>
      </a>
    {/each}
  </nav>
</section>
