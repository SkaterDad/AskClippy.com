<script>
  import ToolbarHandle from "./ToolbarHandle.svelte";
</script>

<div
  class="w-full overflow-hidden threedee text-xs sm:text-sm font-semibold px-4 mt-2 h-24 sm:h-32 flex flex-start items-center"
>
  <ToolbarHandle />
  <slot />
</div>
