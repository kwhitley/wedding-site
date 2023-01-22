<script>
  import { pageTitle } from '~/utils/pageTitle'
</script>

<!-- HEAD -->
<svelte:head>
  <title>{pageTitle()}</title>
  <meta name="description" content="Wedding details for Aimee & Kevin." />
</svelte:head>

<!-- MARKUP -->
<main class="splash">
  <section>
    <strong>the wedding of</strong>

    <h1>
      Aimee Housinger
      Kevin Whitley
    </h1>
  </section>

  <section>
    <h2>Ceremony</h2>
    Saturday, September 16, 2023
    6:00 p.m.

    <a href="https://www.astorianevents.com/">The Astorian</a>
    2500 Summer Street
    Houston, Texas 77007

  </section>

  <hr />

  <section>
    Reception to follow
  </section>



</main>

<!-- STYLES -->
<style lang="scss">
  .splash {
    margin-top: 2rem;
    display: flex;
    flex-flow: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    // min-height: 60vh;
    text-align: center;
  }

  section {
    white-space: pre-line;
  }

  strong {
    font-weight: normal;
  }

  h1 {
    text-align: center;
    letter-spacing: 0;
    position: relative;
    font-size: clamp(2.5rem, 10vw, 6rem);

    &:before {
      content: '&';
      font-size: 4em;
      position: absolute;
      margin-left: -25%;
      left: 50%;
      top: 50%;
      color: var(--foreground-25);
    }
  }

  small {
    font-size: 0.4em;
    display: block;
    margin-bottom: -2.2em;
  }
</style>
