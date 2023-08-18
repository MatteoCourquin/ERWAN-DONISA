<template>
  <section
    :class="['hero-background fixed pt-[20vh] sm:pt-0 top-0 justify-center sm:items-start items-center flex-col sm:text-left text-center w-full h-[100vh] px-paddingMain', isBackground ? 'flex' : 'invisible']">
    <h1 class="text-white mb-8 font-termina-500">
      <span class="anim-text-container block">DESIGNER /</span>
      <span class="anim-text-container">ART DIRECTOR</span>
    </h1>
    <BaseButton @click="$router.push('/work')" size='big' color="white">Let's meet</BaseButton>
    <ButtonScroll :isDark="false" orientation="bottom"
      class="flex items-center !absolute gap-2 link link_white link_underline bottom-[15vh] sm:bottom-[8vh] sm:self-end" />
  </section>
</template>

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
    animateText() {
      const textContainers = document.querySelectorAll('.anim-text-container');

      textContainers.forEach((textContainer, index) => {
        const text = textContainer.innerText;
        textContainer.innerText = '';

        for (let i = 0; i < text.length; i++) {
          const letter = document.createElement('span');
          letter.innerText = text[i];
          textContainer.appendChild(letter);

          gsap.from(letter, {
            opacity: 0,
            duration: 1.4,
            ease: 'power3.inOut',
            delay: i * 0.2 + (index === 1 ? 0.5 : 0),
          });
        }
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkedScroll)
    // this.animateText()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkedScroll)
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