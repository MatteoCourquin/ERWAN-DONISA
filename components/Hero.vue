<template>
  <section
    class="hero flex z-0 justify-center sm:items-start items-center flex-col sm:text-left text-center w-full h-screen px-paddingMain">
    <img class="absolute -z-10 top-0 left-0 w-full h-full object-cover" src="/images/background-hero.png"
      alt="background" />
    <h1 class="text-white mb-8">DESIGNER /<br>
      ART DIRECTOR</h1>
    <button class="button button_big button_white">Let's meet</button>
    <button @click="scroll"
      class="flex items-center gap-2 link link_white link_underline absolute bottom-[11vh] sm:bottom-[8vh] sm:self-end">
      <Arrow :isDark="false" orientation="bottom" />
      Scroll
    </button>
  </section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {};
  },
  methods: {
    scroll() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  },
};
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';
</style>