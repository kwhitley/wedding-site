<script>
  import { VERSION } from '~/constants'
</script>

<!-- MARKUP -->
<div class="brand">
  <a href="/" class="fancy">
    Whitley Wedding
  </a>
</div>

<!-- STYLES -->
<style lang="scss">
  .brand {
    align-self: center;
    font-size: clamp(1.4rem, 8vw, 2rem);
    line-height: 0;
  }

  a {
    letter-spacing: -0.05em;
    transition: color 0.2s ease;
    display: inline-block;
    transform-origin: 0% 50%;
    color: var(--brand-color);

    &:hover {
      color: var(--accent-color);
      text-decoration: none;
      opacity: 0.8;
    }
  }
</style>
