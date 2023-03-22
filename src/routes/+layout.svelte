<script>
  import LogoUrl from "$lib/icons/logo.svg";
  import Button from "$lib/components/Button.svelte";
  import Toolbar from "$lib/components/Toolbar.svelte";
  import IconClose from "$lib/icons/IconClose.svelte";
  import IconMaximize from "$lib/icons/IconMaximize.svelte";
  import IconMinimize from "$lib/icons/IconMinimize.svelte";
  import "../app.postcss";
  import Clippy from "$lib/components/Clippy.svelte";
</script>

<div class="grid grid-cols-1 h-full bg-gray text">
  <div
    class="p-4 bg-blue text-white font-bold flex justify-between items-center"
  >
    <div class="flex items-center">
      <img src={LogoUrl} alt="Paperclip logo" class="h-24 -mb-4 mr-4" /><span
        >Ask Clippy - Document1</span
      >
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
  <Toolbar>
    <Button style="flat">File</Button>
    <Button style="flat">Edit</Button>
    <Button style="flat">View</Button>
    <Button style="flat">Insert</Button>
    <Button style="flat">Format</Button>
    <Button style="flat">Tools</Button>
    <Button style="flat">Table</Button>
    <Button style="flat">Window</Button>
    <Button style="flat">Help</Button>
  </Toolbar>
  <main class="border-2 border-black h-full relative overflow-y-auto">
    <div class="p-24 min-h-screen h-full">
      <div class="p-24 h-full bg-gray-dark">
        <div class="p-24 container mx-auto h-full border border-black bg-white">
          <slot />
        </div>
      </div>
    </div>
    <Clippy />
  </main>
</div>

<style lang="postcss">
  :global(html) {
    height: 100%;
  }
  :global(body) {
    height: 100%;
  }

  div.grid {
    grid-template-rows: auto auto 1fr;
  }
</style>
