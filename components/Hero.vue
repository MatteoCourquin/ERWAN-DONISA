<template>
  <section
    class='hero-background fixed pt-[20vh] sm:pt-0 top-0 justify-center sm:items-start items-center flex-col sm:text-left text-center w-full h-[100vh] px-paddingMain flex'>
    <NuxtImg v-if="isBackground" src='images/erwan1.webp' alt='Background Hero' preload
      class="-z-[1] object-cover fixed top-0 left-0 w-screen h-screen" sizes='xs:500 sm:800 md:1000 lg:2000 xl:2300' />
    <h1 class="text-white mb-8 font-loos-bold">
      <span class="anim-text-container block">DESIGNER /</span>
      <span class="anim-text-container">
        {{ language == 'FRA' ?
          "DIRECTEUR ARTISTIQUE"
          :
          "ART DIRECTOR" }}</span>
    </h1>
    <BaseButton @click="$router.push('/about')" size='big' hover="black" color="white">
      {{ language == 'FRA' ?
        "QUI SUIS-JE"
        :
        "Let's meet" }}
    </BaseButton>
    <ButtonScroll :isDark="false" orientation="bottom"
      class="flex items-center !absolute gap-2 link link_white link_underline bottom-[15vh] sm:bottom-[8vh] sm:self-end" />
  </section>
</template>

<script setup>
const language = useLanguage();
</script>
<script>
import { gsap } from 'gsap';

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
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkedScroll)
  },
};
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';
</style>