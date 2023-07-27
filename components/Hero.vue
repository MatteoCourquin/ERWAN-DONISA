<template>
  <section
    :class="['hero-background fixed top-0 justify-center sm:items-start items-center flex-col sm:text-left text-center w-full h-[100vh] px-paddingMain -pt-[144px]', isBackground ? 'flex' : 'invisible']">
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
    return {
      isBackground: true,
    };
  },
  methods: {
    scroll() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    },
    checkedScroll() {
      const scrolledDistance = window.scrollY || window.pageYOffset;
      this.isBackground = scrolledDistance <= window.innerHeight * 1.2
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkedScroll)
  },
};
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';
.hero-background {
  background-image: url('/images/background-hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>