<script lang="ts">
  export let size: Size = "base";

  let sizeClasses: Record<Size, string> = {
    base: "h-12 w-12",
    small: "h-10 w-10",
  };
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 19.27 20.52"
  class={sizeClasses[size]}
>
  <slot />
</svg>
