<template>
  <section
    :class="['hero-background fixed top-0 justify-center sm:items-start items-center flex-col sm:text-left text-center w-full h-[100vh] px-paddingMain', isBackground ? 'flex' : 'invisible']">
    <h1 class="text-white mb-8">DESIGNER /<br>
      ART DIRECTOR</h1>
    <BaseButton @click="$router.push('/work')" size='big' color="white">Let's meet</BaseButton>
    <ButtonScroll :isDark="false" orientation="bottom"
      class="flex items-center !absolute gap-2 link link_white link_underline bottom-[15vh] sm:bottom-[8vh] sm:self-end" />
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
  background-image: url('/images/background-hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>