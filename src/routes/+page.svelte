<script>
  import { pageTitle } from '~/utils/pageTitle'
  import { fade } from 'svelte/transition'
	import Margarita from '~/components/icons/Margarita.svelte'
</script>

<!-- HEAD -->
<svelte:head>
  <title>{pageTitle()}</title>
  <meta name="description" content="Wedding details for Aimee & Kevin." />
</svelte:head>

<!-- MARKUP -->
<main class="splash">
  <section in:fade={{ duration: 500, delay: 100 }}>
    <strong>the wedding of</strong>

    <h1>
      Aimee Housinger<br />
      Kevin Whitley
    </h1>
  </section>

  <section class="details">
    <h2>Ceremony</h2>
    Saturday, September 16th, 2023<br />
    6:00 p.m.<br />

    <br />

    <a href="https://www.astorianevents.com/">The Astorian</a><br />
    2500 Summer Street<br />
    Houston, Texas 77007<br />
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
    gap: 3rem;
    align-items: center;
    text-align: center;
  }

  strong {
    font-weight: normal;
  }

  h1 {
    text-align: center;
    position: relative;

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

  hr {
    margin: 0;
  }
</style>
