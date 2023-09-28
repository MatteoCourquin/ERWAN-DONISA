<template>
  <div ref="screenLoaderWrapper" class="fixed top-0 left-0 w-screen h-screen z-[999] flex items-center justify-center">
    <div ref="screenLoaderBackground" class="absolute bg-black w-full z-0 rounded-full aspect-square scale-[3]">
    </div>
    <div class='flex items-center z-10'>
      <h1 class="text-5xl pr-6 pb-2 inline-block">
        <span ref="letter1">L</span>
        <span ref="letter2">O</span>
        <span ref="letter3">A</span>
        <span ref="letter4">D</span>
        <span ref="letter5">I</span>
        <span ref="letter6">N</span>
        <span ref="letter7">G</span>
      </h1>
      <div class="flex gap-3 items-center justify-center pt-4">
        <div class="dot-bounce dot-bounce_1 bg-white rounded-full w-4 h-4 animate-bounce" ref="dot1"></div>
        <div class="dot-bounce dot-bounce_2 bg-white rounded-full w-4 h-4 animate-bounce" ref="dot2"></div>
        <div class="dot-bounce dot-bounce_3 bg-white rounded-full w-4 h-4 animate-bounce" ref="dot3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'SceenLoader',
  props: {
    isDisplay: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    removeLoader() {
      const tl = gsap.timeline({ defaults: { duration: 0.3 } });
      tl
        .to(this.$refs.letter1, { opacity: 0, y: '-30px' }, '-=0.2')
        .to(this.$refs.letter2, { opacity: 0, y: '-30px' }, '-=0.2')
        .to(this.$refs.letter3, { opacity: 0, y: '-30px' }, '-=0.2')
        .to(this.$refs.letter4, { opacity: 0, y: '-30px' }, '-=0.2')
        .to(this.$refs.letter5, { opacity: 0, y: '-30px' }, '-=0.2')
        .to(this.$refs.letter6, { opacity: 0, y: '-30px' }, '-=0.2')
        .to(this.$refs.letter7, { opacity: 0, y: '-30px' }, '-=0.2')
        .to(this.$refs.dot1, { opacity: 0, y: '-30px' }, '-=0.2')
        .to(this.$refs.dot2, { opacity: 0, y: '-30px' }, '-=0.2')
        .to(this.$refs.dot3, { opacity: 0, y: '-30px' }, '-=0.2')
        .to(this.$refs.screenLoaderBackground, { scale: 0 }, '-=0.2')
        .to(this.$refs.screenLoaderWrapper, { display: "none" }, '+=0.2')
    },
  },
  watch: {
    isDisplay() {
      this.removeLoader();
    },
  },
};
</script>

<style scoped lang='scss'>
.dot-bounce {
  animation-duration: 1s;
}

.dot-bounce_1 {
  animation-delay: 0s;
}

.dot-bounce_2 {
  animation-delay: .15s;
}

.dot-bounce_3 {
  animation-delay: .3s;
}
</style>