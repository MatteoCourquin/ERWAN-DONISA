<template>
  <!-- shadow-inner
  anim-bounce -->
  <!-- <div
    :class="['w-8 h-[13px] flex flex-col items-center justify-between burger-menu-container', isActive && 'active-burger']">
    <div :class="['transition-all duration-300 rounded-full w-full h-[2px] burger-menu-item backdrop-filter']">
    </div>
    <div :class="['transition-all duration-300 rounded-full w-full h-[2px] burger-menu-item backdrop-filter']">
    </div>
  </div> -->
  <!-- isScrolled || isActive ? 'flex scale-1' : 'flex sm:scale-0 sm:invisible' -->
  <!-- :class="['header z-[900] fixed flex justify-center items-center cursor-pointer transition-all', isActive ? 'bg-black top-0 right-0 w-screen h-screen rounded-none active' : 'bg-white top-14 right-insetMain w-20 h-20 rounded-full']"> -->
  <header @click="isActive = !isActive" :class="['header', isActive ? 'active' : '']">
    test
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isDark: Boolean
  },
  data() {
    return {
      isBackground: false,
      language: 'Eng',
      prevScrollPos: 0,
      scrollDirection: false,
      isActive: false,
      isScrolled: false
    };
  },
  methods: {
    changeLanguage() {
      this.language === 'Eng' ? this.language = 'Fra' : this.language = 'Eng';
    },
    checkScrolled() {
      const scrolledDistance = window.scrollY || window.pageYOffset;
      this.isScrolled = scrolledDistance >= window.innerHeight * 0.4;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkScrolled)
  },
};
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.menu .menu.scroll-direction {
  &::after {
    transform: translateY(-300px);
  }
}

.active-burger.burger-menu-container {
  .burger-menu-item:nth-child(1) {
    transform: translate(0, 7px) rotate(45deg);
  }

  .burger-menu-item:nth-child(2) {
    transform: translate(0, -7px) rotate(-45deg);
  }
}
</style>