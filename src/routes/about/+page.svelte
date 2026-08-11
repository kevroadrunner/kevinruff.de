<script lang="ts">
import AboutSection from "$lib/components/AboutSection.svelte";
import AboutArticle from "$lib/components/AboutArticle.svelte";
import AboutSeparator from "$lib/components/AboutSeparator.svelte";
</script>

<svelte:head>
  <title>About | Kevin Ruff</title>
  <meta
    name="description"
    content="How I think about software development, quality, technology, and the way I work."
  />
</svelte:head>

<div class="px-4 sm:px-8 lg:px-12 py-12 sm:py-24">
  <section>
    <p class="mb-4 text-sm tracking-widest uppercase text-primary">Software Engineer</p>
    <h1 class="tracking-tight text-5xl sm:text-7xl lg:text-8xl">
      Curious by
      <span class="text-primary">nature.</span>
    </h1>
    <p class="mt-8 text-muted-foreground text-lg sm:text-xl lg:text-2xl">
      I like solving problems, understanding why things work, and turning the
      ruff first version into something I'm proud to keep.
    </p>
  </section>

  <AboutSeparator />

  <AboutSection label="01">
    {#snippet title()}
      How I Work
    {/snippet}
    <AboutArticle>
      {#snippet title()}
        Quality is a process.
      {/snippet}
      <p>
        My favorite answer is <em>it depends</em>. The right solution
        depends on the problem, the constraints, and where you are in
        the process.
      </p>
      <p>
        Sometimes a proof of concept is exactly what is needed. Sometimes
        the fastest possible solution is the right first step. It gives
        you something concrete to learn from and shows how far an approach
        can actually take you.
      </p>
      <p>
        The important part is what happens afterwards. I see development
        as a process of getting from <em>working</em> to <em>good</em>.
        The quick solution can be the way there, but it should not be
        where you stop.
      </p>
    </AboutArticle>
    <AboutArticle>
      {#snippet title()}
        Understand your tools.
      {/snippet}
      <p>
        Technologies and frameworks matter to me. I don't want to simply
        know how to use something. I want to understand its strengths,
        its weaknesses, and where it actually makes sense.
      </p>
      <p>
        That understanding makes it easier to make deliberate choices
        instead of simply following what is popular or familiar.
      </p>
      <p>
        I'm always looking for something new to learn, a technology worth
        keeping, or a tool that changes the way I approach a problem.
      </p>
    </AboutArticle>
  </AboutSection>

  <AboutSeparator />

  <AboutSection label="02">
    {#snippet title()}
      Good Code
    {/snippet}
    <AboutArticle>
      {#snippet title()}
        <span class="text-primary">Readable</span> enough that it doesn't need a tour.<br />
        <span class="text-primary">Simple</span> enough that it doesn't need a manual.<br />
        <span class="text-primary">Tested</span> enough that changing it doesn't feel like gambling.
      {/snippet}
      <p>
        I want to be able to come back to code months later and understand
        what I was trying to do without having to reconstruct the entire
        story behind it.
      </p>
      <p>
        Maintainability, clear structure, and good tests matter to me because
        software tends to live much longer than we initially expect.
      </p>
      <p>
        And whenever possible, I like having at least four eyes on something
        before I consider it done. A second perspective catches things that
        are surprisingly easy to miss when you've been staring at the same
        solution for too long.
      </p>
    </AboutArticle>
  </AboutSection>

  <AboutSeparator />

  <AboutSection label="03">
    {#snippet title()}
      A Few<br />
      Contradictions
    {/snippet}
    <AboutArticle>
      {#snippet title()}
        I like simple solutions.
      {/snippet}
      <p>
        Unfortunately, I also have a tendency to come up with clever ones.
        Sometimes they are useful. Sometimes they are simply more complicated
        than they need to be.
      </p>
      <p>
        I'm usually aware when I'm going too far. Knowing that and stopping
        myself are, unfortunately, two different skills.
      </p>
    </AboutArticle>
    <AboutArticle>
      {#snippet title()}
        It's only code. I know that.
      {/snippet}
      <p>
        And yet, some projects become more than just code to me. After
        spending enough time building and refining something, I can get
        surprisingly attached to them.
      </p>
      <p>
        Which is not always helpful when the rational decision would be
        to change it, replace it, or simply let it go.
      </p>
    </AboutArticle>
  </AboutSection>

  <AboutSeparator />

  <AboutSection label="Still Learning">
    {#snippet title()}
      I rarely know the best solution before I have built something.
      Building it is often how I find out.
    {/snippet}
  </AboutSection>
</div>