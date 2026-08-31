<script lang="ts">
  import Copyright from '@iconify-svelte/mdi/copyright';
</script>

<footer class="flex justify-center gap-2 bg-muted py-2 text-xs text-muted-foreground">
  <Copyright class="size-4" />
  <span>{new Date().getFullYear()}</span>
  <span>Kevin Ruff</span>
  <span>•</span>
  <a href="/privacy">Privacy</a>
  <span>•</span>
  <a href="/legal">Legal</a>
</footer>
