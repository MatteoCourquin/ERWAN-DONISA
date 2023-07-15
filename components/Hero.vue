<template>
  <section
    class="hero flex justify-center sm:items-start items-center flex-col sm:text-left text-center w-full h-screen px-paddingMain fixed top-0">
    <h1 class="text-white mb-8">DESIGNER /<br>
      ART DIRECTOR</h1>
    <button class="button button_big button_white">Let's meet</button>
    <button @click="scroll" class="absolute bottom-[11vh] sm:bottom-[8vh] link sm:self-end	 link_white">Scroll</button>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {

    };
  },
  methods: {
    scroll() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';
</style>