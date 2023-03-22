<script>
  import ToolbarHandle from "./ToolbarHandle.svelte";
</script>

<div
  class="threedee text-sm font-semibold px-4 mt-2 h-32 flex flex-start items-center"
>
  <ToolbarHandle />
  <slot />
</div>
