<script lang="typescript">
  import wordArt from "$lib/assets/askclippy_wordart.png";
</script>

<svelte:head>
  <title>Ask Clippy!</title>
</svelte:head>

<h1 class="text-center my-16 sm:my-32 text-3xl sm:text-5xl text-blue">
  Who wants to "Bing" something?
</h1>
<p class="text-center text-2xl sm:text-4xl text-red">
  "new Bing"? "Bing Chat"? Nah....
</p>
<p class="text-center mt-16">
  <span class="sr-only">Ask Clippy!</span>
  <img src={wordArt} class="h-128 inline-block" alt="Ask Clippy!" />
</p>
<hr class="my-8" />
<div class="text-base sm:text-lg pees">
  <p>Dear Microsoft,</p>
  <p>
    I think you missed out on a great branding/meme opportunity. To help me
    convince you, I asked ChatGPT to write a pitch in the style of a Steve
    Balmer keynote.
  </p>
  <p>
    You know <a class="underline text-blue" href="mailto://mike@askclippy.com"
      >where to find me</a
    >. Have your people call my people.
  </p>
  <blockquote class="bg-gray/25 border-4 border-blue p-8">
    <p>
      Ladies and gentlemen, I have four words for you today. <strong
        >Clippy! Clippy! Clippy! Clippy!</strong
      >
    </p>
    <p>
      That's right, the iconic virtual assistant is back, and it's ready to make
      waves in the world of search. We're bringing you <strong
        >Ask Clippy</strong
      >, powered by Bing GPT, and it's going to blow your minds!
    </p>
    <p>
      Clippy isn't just a nostalgic throwback; it's a revolution in how we
      search for information. <strong>Ask Clippy</strong> harnesses the power of
      Artificial Intelligence (AI) to provide you with personalized, accurate, and
      relevant responses to your queries. It's like having your own personal guide
      through the vast expanse of the internet.
    </p>
    <p>
      So, why Clippy, you might ask? Because Clippy was a pioneer, a visionary,
      and a symbol of innovation. And now, with the power of AI, we're taking
      that legacy to a whole new level.
    </p>
    <p>
      When I say "Clippy," I want you to imagine a search experience like no
      other. Imagine the joy of receiving precise answers to your questions, the
      exhilaration of finding exactly what you're looking for with ease. <strong
        >Ask Clippy</strong
      >
      is here to make search exciting again!
    </p>
    <p>
      But we can't do it alone. We need developers, we need enthusiasts, we need
      all of you to join us on this journey. Together, we'll redefine how we
      interact with search engines and create an experience that will leave a
      lasting impact.
    </p>
    <p>
      So, let me hear you now! <strong class="text-red"
        >Clippy! Clippy! Clippy! Clippy!</strong
      > Embrace the power of Ask Clippy and let's revolutionize search together!
    </p>
    <p>Thank you, and let's give a big round of applause for Clippy!</p>
  </blockquote>
</div>

<style>
  .pees p {
    @apply py-8;
  }

  strong {
    color: black;
    background: linear-gradient(
      90deg,
      red,
      orange,
      yellow,
      green,
      blue,
      purple
    );
    background-clip: text;
    -webkit-background-clip: text;
  }
  strong:hover {
    color: transparent;
    transition: 500ms ease;
    @apply drop-shadow-lg;
  }
</style>
