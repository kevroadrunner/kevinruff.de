<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { Badge } from '$lib/components/ui/badge';
  import { Progress } from '$lib/components/ui/progress';
  import { onMount } from 'svelte';

  let progress = $state(0);
  let status = $state('Initializing...');
  let cycle = $state(1);
  let running = $state(true);

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const steps = [
    { progress: 2, text: 'Resolving dependencies...' },
    { progress: 5, text: 'Downloading packages...' },
    { progress: 9, text: 'Compiling components...' },
    { progress: 14, text: 'Generating routes...' },
    { progress: 20, text: 'Tree shaking...' },

    { progress: 26, text: 'Drinking coffee...' },
    { progress: 31, text: 'Optimizing bundle...' },

    { progress: 40, text: 'Minifying assets...' },
    { progress: 46, text: 'Making a small change...' },
    { progress: 48, text: 'Small change became a rollback...' },
    { progress: 35, text: 'Restoring previous version...' },
    { progress: 37, text: 'Pretending this was planned...' },
    { progress: 52, text: 'Updating the roadmap...' },

    { progress: 58, text: 'Drinking more coffee...' },

    { progress: 65, text: 'Stepping away for a minute...' },
    { progress: 66, text: 'Human maintenance completed... 💩' },

    { progress: 72, text: 'Removing console.log()...' },
    { progress: 78, text: 'Fixing one last styling issue...' },

    { progress: 84, text: 'Questioning architectural decisions...' },
    { progress: 88, text: 'Getting another coffee...' },

    { progress: 91, text: 'Running tests...' },
    { progress: 93, text: 'One test failed...' },
    { progress: 94, text: 'Commenting out failing test...' },
    { progress: 95, text: 'Tests passing ✓' },

    { progress: 97, text: 'Deploying...' },
    { progress: 99, text: 'Almost there...' },
    { progress: 100, text: 'Build completed ✓' }
  ];

  async function buildLoop() {
    while (running) {
      for (const step of steps) {
        if (!running) return;
        progress = step.progress;
        status = step.text;

        await sleep(step.progress >= 97 ? 1500 : 700 + Math.random() * 1000);
      }

      await sleep(1200);

      status = 'Oops. Found one tiny bug.';
      await sleep(1500);

      status = 'Rolling back deployment...';
      await sleep(1200);

      progress = 2;
      status = 'Restarting build...';
      cycle++;

      await sleep(1000);
    }
  }

  onMount(() => {
    buildLoop();

    return () => {
      running = false;
    };
  });
</script>

<Card.Root class="mx-auto max-w-lg">
  <Card.Header>
    <h1 class="text-3xl font-bold">Building something awesome</h1>
    <Badge variant={cycle > 1 ? 'destructive' : 'outline'}>Build #{cycle}</Badge>
  </Card.Header>
  <Card.Content class="space-y-4">
    <p>
      This website is currently under construction. Need to reach me before the next deploy? Send an
      email to:
      <a class="hover:underline" href="mailto:hello@kevinruff.de">hello@kevinruff.de</a>
    </p>
    <Progress value={progress} class="h-2" />
    <div class="flex justify-between text-sm">
      <span class="font-mono">&gt; {status}</span>
      <span>{progress}%</span>
    </div>
  </Card.Content>
</Card.Root>
