<script lang="typescript">
  import { draggable } from "@neodrag/svelte";
  import Button from "$lib/components/Button.svelte";
  import IconClose from "$lib/icons/IconClose.svelte";

  export let css = "";

  export let onClose = () => {};
</script>

<div
  use:draggable={{
    bounds: "body",
  }}
  class="fixed min-h-0 border-2 border-b-black border-r-black border-t-gray border-l-gray {css}"
>
  <div class="threedee bg-gray p-2 h-full flex flex-col min-h-0">
    <div class="bg-blue py-3 px-4 flex-none flex justify-end mb-2">
      <Button size="small" on:click={onClose}>
        <IconClose size="small" />
      </Button>
    </div>
    <div class="flex-1 min-h-0 min-w-0">
      <slot />
    </div>
  </div>
</div>
