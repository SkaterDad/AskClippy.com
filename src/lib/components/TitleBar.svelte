<script>
  import LogoUrl from "$lib/icons/Logo.svg";
  import Button from "$lib/components/Button.svelte";
  import IconClose from "$lib/icons/IconClose.svelte";
  import IconMaximize from "$lib/icons/IconMaximize.svelte";
  import IconMinimize from "$lib/icons/IconMinimize.svelte";
</script>

<div
  class="p-2 sm:p-4 text-xs sm:text-base bg-blue text-white font-bold flex justify-between items-center"
>
  <div class="flex items-center">
    <img
      src={LogoUrl}
      alt="Paperclip logo"
      class="h-16 sm:h-24 -mb-4 mr-4"
    /><span>Ask Clippy - Document1</span>
  </div>
  <div class="flex gap-3">
    <Button>
      <IconMinimize />
    </Button>
    <Button css="mr-2">
      <IconMaximize />
    </Button>
    <Button>
      <IconClose />
    </Button>
  </div>
</div>
