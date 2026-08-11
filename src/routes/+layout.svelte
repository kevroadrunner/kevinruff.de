<script lang="ts">
  import './layout.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const { children } = $props();
</script>

<main class="min-h-screen min-w-xs bg-background">
  <div class="flex min-h-screen flex-col">
    <Header />
    <section class="flex flex-1 flex-col">
      {@render children()}
    </section>
    <Footer />
  </div>
</main>
