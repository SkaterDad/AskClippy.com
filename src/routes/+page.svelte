<script>
  import clippy from "$lib/assets/clippy.svg";
</script>

<svelte:head>
  <title>Ask Clippy!</title>
</svelte:head>

<div class="border border-black h-full relative">
  <div class="pt-6 px-6 h-full">
    <div class="pt-6 px-6 h-full bg-word-gray-dark">
      <div class="p-8 h-full border border-black bg-white">
        <h1 class="text-xl font-bold mt-4 mb-4">Welcome to Ask Clippy!</h1>
        <p class="mb-2">
          Microsoft recently announced a new version of Bing with GPT. Sounds
          awesome, but what a missed opportunity!
        </p>
        <p class="mb-2">Who wants to "Bing" something?</p>
        <p class="mb-2">I'd much rather Ask Clippy!</p>
      </div>
    </div>
  </div>
  <div
    class="absolute bottom-0 right-0 border-[2px] border-b-black border-r-black border-t-word-gray border-l-word-gray mb-8 mr-8"
  >
    <div class="threedee bg-word-gray p-1">
      <div class="bg-word-blue p-1 flex justify-end mb-[2px]">
        <button
          class="bg-word-gray threedee h-5 w-5 flex items-center justify-center"
          >×</button
        >
      </div>
      <div
        class="bg-gradient-to-br from-word-gray-dark to-white w-32 flex items-center justify-center py-2"
      >
        <img src={clippy} alt="Clippy Mascot" class="h-32 w-auto" />
      </div>
    </div>
  </div>
</div>
