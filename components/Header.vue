<template>
  <header class="z-[900] fixed top-0 left-0 w-screen py-14 px-paddingMain flex justify-between items-center">
    <NuxtLink :class="['link', isDark ? 'link_black' : 'link_white']" to="/">Home</NuxtLink>
    <div @click="isActive = !isActive"
      :class="['w-10 h-5 flex flex-col justify-between cursor-pointer burger-menu-container', isActive && 'active-burger']">
      <div :class="['transition-all duration-300 w-full h-[2px] burger-menu-item', isDark ? 'bg-black' : 'bg-white']"></div>
      <div :class="['transition-all duration-300 w-full h-[2px] burger-menu-item', isDark ? 'bg-black' : 'bg-white']"></div>
    </div>
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
      isActive: false
    };
  },
  methods: {}
};
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.active-burger.burger-menu-container {
  .burger-menu-item:nth-child(1) {
    transform: translate(0, 9px) rotate(45deg);
  }

  .burger-menu-item:nth-child(2) {
    transform: translate(0, -9px) rotate(-45deg);
  }
}
</style>