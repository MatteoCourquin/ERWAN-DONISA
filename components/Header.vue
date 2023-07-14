<template>
  <header class="header">
    <NuxtLink :class="['link', isDark ? 'link_black' : 'link_white']" to="/">Home</NuxtLink>
    <div @click="isActive = !isActive" :class="['burger-menu-container', isActive && 'active-burger']">
      <div :class="['burger-menu-item', isDark ? 'bg-black' : 'bg-white']"></div>
      <div :class="['burger-menu-item', isDark ? 'bg-black' : 'bg-white']"></div>
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

.header {
  z-index: 999;
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw;
  padding: 60px $padding-main;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.burger-menu-container {
  width: 40px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  .burger-menu-item {
    transition: all 0.3s ease-in-out;
    width: 100%;
    height: 2px;
  }
}

.active-burger.burger-menu-container {
  .burger-menu-item:nth-child(1) {
    transform: translate(0, 9px) rotate(45deg);
  }

  .burger-menu-item:nth-child(2) {
    transform: translate(0, -9px) rotate(-45deg);
  }
}
</style>