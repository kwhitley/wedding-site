<script>
  import Brand from './Brand.svelte'
  import Menu from './Menu.svelte'

  export let sticky = false
  export let constrained = false
  export let version = false
  export let collapsible = false
  export let horizontal = false
  export let brand = true
</script>

<!-- MARKUP -->
<header class:sticky>
  <section class:constrained>
    {#if brand}
      <Brand showVersion={version} />
    {/if}

    <div class="menu" class:open={true}>
      <Menu horizontal={horizontal} open={true}>
        <slot />
      </Menu>
    </div>
  </section>
</header>

<!-- STYLES -->
<style lang="scss">
  header {
    padding: 0.5em var(--page-inset) 0.7em;
    background-color: var(--header-color);
    z-index: 1;
    display: flex;
    justify-content: center;
    backdrop-filter: blur(0.2em);
    border-bottom: 1px solid var(--foreground-50);
  }

  section {
    flex: 1;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    column-gap: 2em;
    row-gap: 1em;

    &.constrained {
      max-width: var(--max-page-width);
    }

    @media screen and (max-width: 300px) {
      flex-flow: column;
      align-items: flex-end;
      padding-top: 2rem;

      :global(.brand) {
        font-size: 2.5rem;
      }
    }
  }

  div.menu {
    min-height: 3em;
    display: flex;
    align-items: center;

    // padding: 0.8em 0;

    &.open {
      @media (max-width: 400px) {
        // flex: 1 100%;
        padding-top: 0;
      }
    }
  }

  .sticky {
    border-bottom: 1px solid var(--foreground-50);
    box-shadow: 0 0 1em rgba(0,0,0,0.2);
    top: 0;
    position: sticky;
  }
</style>
