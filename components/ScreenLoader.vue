<template>
  <div ref="screenLoaderWrapper" class="fixed top-0 left-0 w-screen h-screen z-[999] flex items-center justify-center">
    <div ref="screenLoaderBackground" class="absolute bg-black w-full z-0 rounded-full aspect-square scale-[3]">
    </div>
    <div class='flex items-center z-10 scale-50 md:scale-75 lg:scale-100'>
      <svg v-if="language == 'FRA'" width="593" height="72" viewBox="0 0 593 72" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path class="animation-loader"
          d="M27.1313 18.297H28.8983C42.9773 18.297 52.8953 23.541 52.8953 33.972H42.6353C42.6353 29.925 38.1893 26.904 28.8983 26.904H27.1313C18.0683 26.904 13.2803 30.267 13.2803 36.651V39.045C13.2803 45.657 18.0683 48.906 27.1313 48.906H28.8983C38.1323 48.906 42.8063 45.6 42.8063 41.724H53.1233C53.1233 51.756 42.9773 57.513 28.8983 57.513H27.1313C13.5653 57.513 2.96328 51.756 2.96328 39.045V36.651C2.96328 23.826 13.5653 18.297 27.1313 18.297Z"
          fill="white" />
        <path class="animation-loader"
          d="M59.2132 18.81H69.3022V33.402H95.1232V18.81H105.212V57H95.1232V41.61H69.3022V57H59.2132V18.81Z"
          fill="white" />
        <path class="animation-loader"
          d="M129.977 18.81H144.911L164.804 57H154.715L150.269 48.45H124.334L119.888 57H110.141L129.977 18.81ZM136.019 25.821L128.324 40.755H146.279L138.47 25.821H136.019Z"
          fill="white" />
        <path class="animation-loader"
          d="M170.438 18.81H202.529C210.965 18.81 215.981 23.541 215.981 30.153V31.863C215.981 36.879 213.074 40.812 208.229 42.408L217.748 57H206.291L197.285 43.206H180.527V57H170.438V18.81ZM180.527 26.334V35.568H199.85C203.726 35.568 205.721 34.371 205.721 31.464V30.609C205.721 27.816 203.726 26.334 199.85 26.334H180.527Z"
          fill="white" />
        <path class="animation-loader"
          d="M243.839 18.297H246.632C260.198 18.297 270.116 23.769 270.116 34.029H259.856C259.856 30.039 255.353 26.904 246.632 26.904H243.839C235.289 26.904 230.501 30.438 230.501 36.651V39.045C230.501 45.6 235.289 48.906 243.839 48.906H246.632C255.296 48.906 260.027 45.828 260.027 41.268H270.458V57H261.794V52.44H259.856C256.379 55.746 251.192 57.513 245.207 57.513H242.414C230.216 57.513 220.184 51.756 220.184 39.045V36.651C220.184 23.997 230.843 18.297 243.839 18.297Z"
          fill="white" />
        <path class="animation-loader"
          d="M277.555 18.81H319.735V26.676H287.587V33.915H316.543V41.268H287.587V49.077H320.02V57H277.555V18.81Z"
          fill="white" />
        <path class="animation-loader"
          d="M327.355 18.81H343.771L355.912 38.133H358.534L370.675 18.81H386.236V57H376.147V28.272H374.209L362.239 47.367H350.725L338.926 28.272H336.931V57H327.355V18.81Z"
          fill="white" />
        <path class="animation-loader"
          d="M393.555 18.81H435.735V26.676H403.587V33.915H432.543V41.268H403.587V49.077H436.02V57H393.555V18.81Z"
          fill="white" />
        <path class="animation-loader"
          d="M440.71 18.81H453.877L477.19 44.973H478.615V18.81H488.191V57H475.081L451.768 30.837H450.286V57H440.71V18.81Z"
          fill="white" />
        <path class="animation-loader" d="M495.431 18.81H543.824V26.961H524.672V57H514.583V26.961H495.431V18.81Z"
          fill="white" />
        <circle class="animation-loader dot-bounce dot-bounce_1" cx="556" cy="53" r="5" fill="white" />
        <circle class="animation-loader dot-bounce dot-bounce_2" cx="572" cy="53" r="5" fill="white" />
        <circle class="animation-loader dot-bounce dot-bounce_3" cx="588" cy="53" r="5" fill="white" />
      </svg>

      <svg v-if="language == 'ENG'" width="415" height="40" viewBox="0 0 415 40" fill="none"
        xmlns="http://www.w3.org/2000/svg" class="overflow-visible">
        <path class="animation-loader" d="M3.7574 39V0.856646H13.8341V30.859H43.2102V39H3.7574Z" fill="white" />
        <path class="animation-loader"
          d="M69.8959 0.344272H72.6285C86.2918 0.344272 97.1655 7.06206 97.1655 19.0174V20.8392C97.1655 32.9084 86.2918 39.5124 72.6285 39.5124H69.8959C55.9479 39.5124 44.8465 32.9084 44.8465 20.8392V19.0174C44.8465 7.06206 55.9479 0.344272 69.8959 0.344272ZM69.8959 8.94076C60.9009 8.94076 55.1509 12.5274 55.1509 19.0174V20.8392C55.1509 27.3862 60.9009 30.9159 69.8959 30.9159H72.1731C81.1681 30.9159 86.9181 27.3862 86.9181 20.8392V19.0174C86.9181 12.5274 81.1681 8.94076 72.1731 8.94076H69.8959Z"
          fill="white" />
        <path class="animation-loader"
          d="M117.007 0.856646H131.923L151.792 39H141.715L137.275 30.4604H111.371L106.931 39H97.1955L117.007 0.856646ZM123.042 7.85908L115.356 22.7748H133.289L125.49 7.85908H123.042Z"
          fill="white" />
        <path class="animation-loader"
          d="M156.757 0.856646H182.775C196.666 0.856646 204.977 6.09424 204.977 18.4481V21.6362C204.977 33.8763 196.95 39 182.775 39H156.757V0.856646ZM166.834 8.99769V30.859H182.775C191.542 30.859 194.73 27.7847 194.73 21.6362V18.4481C194.73 12.2427 191.656 8.99769 182.775 8.99769H166.834Z"
          fill="white" />
        <path class="animation-loader"
          d="M209.903 0.856646H240.874V8.99769H230.398V30.859H240.874V39H209.903V30.859H220.379V8.99769H209.903V0.856646Z"
          fill="white" />
        <path class="animation-loader"
          d="M247.757 0.856646H260.908L284.193 26.9877H285.616V0.856646H295.18V39H282.086L258.802 12.869H257.322V39H247.757V0.856646Z"
          fill="white" />
        <path class="animation-loader"
          d="M326.473 0.344272H329.262C342.812 0.344272 352.718 5.80959 352.718 16.0571H342.47C342.47 12.0719 337.973 8.94076 329.262 8.94076H326.473C317.933 8.94076 313.151 12.4704 313.151 18.6759V21.0669C313.151 27.6139 317.933 30.9159 326.473 30.9159H329.262C337.916 30.9159 342.641 27.8416 342.641 23.2872H353.059V39H344.406V34.4456H342.47C338.997 37.7475 333.817 39.5124 327.839 39.5124H325.049C312.866 39.5124 302.847 33.7624 302.847 21.0669V18.6759C302.847 6.03731 313.493 0.344272 326.473 0.344272Z"
          fill="white" />
        <circle class="animation-loader dot-bounce dot-bounce_1" cx="373" cy="33" r="6" fill="white" />
        <circle class="animation-loader dot-bounce dot-bounce_2" cx="391" cy="33" r="6" fill="white" />
        <circle class="animation-loader dot-bounce dot-bounce_3" cx="409" cy="33" r="6" fill="white" />
      </svg>
    </div>
  </div>
</template>

<script setup>
const language = useLanguage()
</script>
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
      const tl = gsap.timeline({ defaults: { duration: .4 } });
      let animationLoaderItems = gsap.utils.toArray(".animation-loader");
      animationLoaderItems.forEach((item, index) => {
        tl.to(item, { opacity: 0 }, '-=0.2')
      })
      tl
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
@import '@/scss/main.scss';

.dot-bounce {
  animation: bounce-loader 1s infinite;
}

.dot-bounce_1 {
  animation-delay: 0s;
}

.dot-bounce_2 {
  animation-delay: .15s;
}

.dot-bounce_3 {
  animation-delay: .3s;
}</style>