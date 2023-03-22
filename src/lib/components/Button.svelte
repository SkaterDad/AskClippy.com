<script lang="typescript">
  import { clsx } from "clsx";

  export let css: string | undefined = undefined;

  export let style: Style = "3D";
  export let size: Size = "base";

  let styleClasses: Record<Style, string> = {
    ["3D"]: "threedee basic-shadow",
    ["flat"]: "threedee-on-hover",
  };

  let sizeClasses: Record<Size, string> = {
    base: "py-2 px-4",
    small: "p-2",
  };
</script>

<button
  {...$$restProps}
  class={clsx(
    styleClasses[style],
    sizeClasses[size],
    "flex items-center justify-center bg-gray",
    css
  )}
  on:click
>
  <slot />
</button>
