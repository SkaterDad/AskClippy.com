<script lang="typescript">
  import { draggable } from "@neodrag/svelte";
  import clippy from "$lib/assets/clippy.svg";
  import Button from "$lib/components/Button.svelte";
  import IconClose from "$lib/icons/IconClose.svelte";
</script>

<div
  use:draggable={{
    bounds: "body",
  }}
  class="fixed bottom-0 right-0 border-2 border-b-black border-r-black border-t-gray border-l-gray mb-32 mr-32"
>
  <div class="threedee bg-gray p-2">
    <div class="bg-blue py-3 px-4 flex justify-end mb-2">
      <Button size="small">
        <IconClose size="small" />
      </Button>
    </div>
    <div
      class="bg-gradient-to-br from-gray-dark to-white flex items-center justify-center py-8 px-64"
    >
      <img src={clippy} alt="Clippy Mascot" class="h-128 w-auto" />
    </div>
  </div>
</div>
