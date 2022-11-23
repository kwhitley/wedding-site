<script>
  import { pageTitle } from '~/utils/pageTitle'
</script>

<!-- HEAD -->
<svelte:head>
  <title>{pageTitle('single-step file sharing')}</title>
  <meta name="description" content="Create itty links by dragging files, pasting from the clipboard, or writing content from scratch.  Try it today!" />
</svelte:head>

<!-- MARKUP -->
<section class="splash">
  <h1>
    <small>the wedding of</small>
    Aimee &amp; Kevin
  </h1>
</section>

<!-- STYLES -->
<style lang="scss">
  .splash {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
  }

  h1 {
    white-space: pre-line;
    text-align: center;
    letter-spacing: 0;
    font-size: 6em;
  }

  small {
    font-size: 0.4em;
    display: block;
    margin-bottom: -2.2em;
  }
</style>
