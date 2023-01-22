<script>
  import { navlink } from 'svelte-navlink-action'
  import { fly } from 'svelte/transition'
  import Footer from '~/layout/Footer.svelte'
  import Nav from '~/layout/Nav.svelte'
  import '~/styles/app.scss'
  import { DEV } from '~/constants'
	import { pageTitle } from '~/utils/pageTitle'

  // DEFINES IF THE PAGE IS WIDTH-CONSTRAINED
  let constrained = true
  let year = new Date().getFullYear()

  // DATA FROM +layout.js
  export let data
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href="/favicon.png">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <html lang="en" />
</svelte:head>

<main>
  <Nav version horizontal constrained>
    <a href="/" use:navlink={{ exact: true }}>Home</a>
    <a href="/event-details" use:navlink>Event Details</a>
    <a href="/travel-and-accomodations" use:navlink>Travel &amp; Accomodations</a>
    <a href="/things-to-do" use:navlink>Things to Do</a>
  </Nav>

  <section class="page-container" class:constrained>
    {#key data.pathname}
      <div
        class="page"
        in:fly={{ x: 100, duration: 200, delay: 110 }}
        out:fly={{ x: -100, duration: 100 }}
        >
        <slot />
      </div>
    {/key}
  </section>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-flow: column;
    min-height: 100%;
    position: relative;
    overflow: hidden;

    section {
      flex: 1;
      display: flex;
      flex-flow: row wrap;
      align-self: center;
      max-width: var(--max-width);
      width: 100%;
      justify-content: center;
      padding: 3rem var(--page-inset);
    }

    .page {
      flex: 1;
      max-width: var(--max-page-width);
    }
  }

  .page {
    padding: 1rem 0 3rem;
  }
</style>
