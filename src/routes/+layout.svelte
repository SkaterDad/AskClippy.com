<script>
  import "../app.postcss";
</script>

<div class="grid grid-cols-1 h-full bg-word-gray text">
  <div
    class="p-1 bg-word-blue text-white font-bold flex justify-between items-center"
  >
    <div>
      <span class="mr-2">🧻</span><span>Ask Clippy - Document1</span>
    </div>
    <div class="flex gap-[2px]">
      <button
        class="threedee basic-shadow bg-word-gray h-6 w-6 text-black font-bold"
        >_</button
      >
      <button
        class="threedee basic-shadow bg-word-gray h-6 w-6 text-black font-bold"
        >□</button
      >
      <button
        class="ml-1 threedee basic-shadow bg-word-gray h-6 w-6 text-black font-bold"
        >X</button
      >
    </div>
  </div>
  <div class="threedee toolbar mt-[2px] flex flex-start items-center gap-[1px]">
    <div class="flex-none threedee w-[3px] bg-word-gray h-6" />
    <div class="flex-none threedee w-[3px] bg-word-gray h-6" />
    <button>File</button>
    <button>Edit</button>
    <button>View</button>
    <button>Insert</button>
    <button>Format</button>
    <button>Tools</button>
    <button>Table</button>
    <button>Window</button>
    <button>Help</button>
  </div>
  <main>
    <slot />
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

  .toolbar {
    @apply text-sm font-semibold px-1;
  }
  .toolbar button {
    @apply py-1 px-2;
  }
  .toolbar button:hover {
    @apply bg-white/50;
  }
</style>
