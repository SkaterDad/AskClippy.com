<script>
  import Button from "$lib/components/Button.svelte";
  import Toolbar from "$lib/components/Toolbar.svelte";
  import TitleBar from "$lib/components/TitleBar.svelte";
  import "../app.postcss";
  import Clippy from "$lib/components/Clippy.svelte";
</script>

<div
  class="layout-grid grid grid-cols-1 h-full bg-gray text selection:bg-blue selection:text-white"
>
  <TitleBar />
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
  <main class="w-full relative overflow-auto bg-gray-dark">
    <div class="border-2 border-black">
      <div
        class="my-12 sm:my-24 mx-auto p-24 border border-black bg-white min-h-[11in] max-w-[8.5in]"
      >
        <slot />
      </div>
    </div>
    <Clippy />
  </main>
  <footer class="threedee flex gap-8 items-center px-8 pt-3 pb-1 text-sm">
    <p class="threedee-inset px-8">
      <a href="mailto://mike@askclippy.com" class="hover:underline"
        >Webmaster E-Mail</a
      >
    </p>
    <p class="threedee-inset px-8">
      <a href="https://skaterdad.dev/games/">More Apps & Games</a>
    </p>
    <p class="threedee-inset px-8">
      <a href="https://twitter.com/SkaterDadCodes">@SkaterDadCodes</a>
    </p>
  </footer>
</div>

<style lang="postcss">
  :global(html) {
    height: 100%;
  }
  :global(body) {
    height: 100%;
  }

  .layout-grid {
    grid-template-rows: auto auto 1fr auto;
  }
</style>
