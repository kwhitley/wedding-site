<script>
  import GitHub from '~/components/icons/GitHub.svelte'
  import { page } from '$app/stores'

  $: editPath = `https://github.com/kwhitley/wedding-site/blob/main/src/routes${$page.url.pathname}/+page.md`
</script>

<!-- MARKUP -->
<a class="edit" href={editPath}>
  edit page
</a>

<!-- !STYLES -->
<style lang="scss">
  a {
    font-size: 0.9rem;
    display: block;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    color: var(--foreground-color);
    opacity: 0;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.5;
      text-decoration: none;
    }
  }
</style>
