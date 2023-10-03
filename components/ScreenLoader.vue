<template>
  <div ref="screenLoaderWrapper" class="fixed top-0 left-0 w-screen h-screen z-[999] flex items-center justify-center">
    <div ref="screenLoaderBackground" class="absolute bg-black w-full z-0 rounded-full aspect-square scale-[3]">
    </div>
    <div class='flex items-center z-10 scale-50 md:scale-75 lg:scale-100'>
      <svg width="415" height="40" viewBox="0 0 415 40" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="overflow-visible">
        <path ref="letter1" d="M3.7574 39V0.856646H13.8341V30.859H43.2102V39H3.7574Z" fill="white" />
        <path ref="letter2"
          d="M69.8959 0.344272H72.6285C86.2918 0.344272 97.1655 7.06206 97.1655 19.0174V20.8392C97.1655 32.9084 86.2918 39.5124 72.6285 39.5124H69.8959C55.9479 39.5124 44.8465 32.9084 44.8465 20.8392V19.0174C44.8465 7.06206 55.9479 0.344272 69.8959 0.344272ZM69.8959 8.94076C60.9009 8.94076 55.1509 12.5274 55.1509 19.0174V20.8392C55.1509 27.3862 60.9009 30.9159 69.8959 30.9159H72.1731C81.1681 30.9159 86.9181 27.3862 86.9181 20.8392V19.0174C86.9181 12.5274 81.1681 8.94076 72.1731 8.94076H69.8959Z"
          fill="white" />
        <path ref="letter3"
          d="M117.007 0.856646H131.923L151.792 39H141.715L137.275 30.4604H111.371L106.931 39H97.1955L117.007 0.856646ZM123.042 7.85908L115.356 22.7748H133.289L125.49 7.85908H123.042Z"
          fill="white" />
        <path ref="letter4"
          d="M156.757 0.856646H182.775C196.666 0.856646 204.977 6.09424 204.977 18.4481V21.6362C204.977 33.8763 196.95 39 182.775 39H156.757V0.856646ZM166.834 8.99769V30.859H182.775C191.542 30.859 194.73 27.7847 194.73 21.6362V18.4481C194.73 12.2427 191.656 8.99769 182.775 8.99769H166.834Z"
          fill="white" />
        <path ref="letter5"
          d="M209.903 0.856646H240.874V8.99769H230.398V30.859H240.874V39H209.903V30.859H220.379V8.99769H209.903V0.856646Z"
          fill="white" />
        <path ref="letter6"
          d="M247.757 0.856646H260.908L284.193 26.9877H285.616V0.856646H295.18V39H282.086L258.802 12.869H257.322V39H247.757V0.856646Z"
          fill="white" />
        <path ref="letter7"
          d="M326.473 0.344272H329.262C342.812 0.344272 352.718 5.80959 352.718 16.0571H342.47C342.47 12.0719 337.973 8.94076 329.262 8.94076H326.473C317.933 8.94076 313.151 12.4704 313.151 18.6759V21.0669C313.151 27.6139 317.933 30.9159 326.473 30.9159H329.262C337.916 30.9159 342.641 27.8416 342.641 23.2872H353.059V39H344.406V34.4456H342.47C338.997 37.7475 333.817 39.5124 327.839 39.5124H325.049C312.866 39.5124 302.847 33.7624 302.847 21.0669V18.6759C302.847 6.03731 313.493 0.344272 326.473 0.344272Z"
          fill="white" />
        <circle ref="dot1" cx="373" cy="33" r="6" fill="white" />
        <circle ref="dot2" cx="391" cy="33" r="6" fill="white" />
        <circle ref="dot3" cx="409" cy="33" r="6" fill="white" />
      </svg>
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
      const tl = gsap.timeline({ defaults: { duration: .3 } });
      tl
        .to(this.$refs.letter1, { opacity: 0 }, '-=0.2')
        .to(this.$refs.letter2, { opacity: 0 }, '-=0.2')
        .to(this.$refs.letter3, { opacity: 0 }, '-=0.2')
        .to(this.$refs.letter4, { opacity: 0 }, '-=0.2')
        .to(this.$refs.letter5, { opacity: 0 }, '-=0.2')
        .to(this.$refs.letter6, { opacity: 0 }, '-=0.2')
        .to(this.$refs.letter7, { opacity: 0 }, '-=0.2')
        .to(this.$refs.dot1, { opacity: 0 }, '-=0.2')
        .to(this.$refs.dot2, { opacity: 0 }, '-=0.2')
        .to(this.$refs.dot3, { opacity: 0 }, '-=0.2')
        .to(this.$refs.screenLoaderBackground, { duration: .5, scale: 0 }, '-=0.5')
        .to(this.$refs.screenLoaderWrapper, { display: "none" }, '-=0.2')
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