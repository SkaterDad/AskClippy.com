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
    You know <a class="underline text-blue" href="mailto://mike@skaterdad.dev"
      >where to find me</a
    >. Have your people call my people.
  </p>
  <blockquote class="bg-gray/25 border-4 border-blue p-8">
    <p>
      Ladies and gentlemen, I have one word for you today: <strong
        class="text-red">Clippy!</strong
      >
    </p>
    <p>
      Yes, you heard me right. The virtual assistant that you love to hate is
      back! And this time, it's powered by AI. We call it "Ask Clippy," and it's
      going to revolutionize the world of search!
    </p>
    <p>
      With <strong>the power of AI</strong>, Ask Clippy is going to offer users
      personalized, relevant, and accurate responses to their queries. No more
      sifting through pages of irrelevant results - Ask Clippy is here to guide
      you to the information you need.
    </p>
    <p>
      Now, some of you might be thinking, "Why Clippy? Why now?" <strong
        >Well, let me tell you - Clippy was ahead of its time.</strong
      > It was the original virtual assistant, designed to help users navigate complex
      software. And now with the power of AI, Clippy is going to take that assistance
      to the next level.
    </p>
    <p>
      But it's not just about functionality. Ask Clippy is going to engage users
      in a whole new way. It's going to be fun, it's going to be nostalgic, and
      it's going to be the go-to resource for anyone seeking information online.
    </p>
    <p>
      So I urge you to join me in embracing the power of Ask Clippy. It's a
      unique opportunity to showcase our innovation and creativity while
      providing users with a fun and effective search experience.
    </p>
    <p>Thank you, and <strong>let's get excited about Ask Clippy!</strong></p>
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
