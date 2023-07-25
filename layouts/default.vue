<template>
  <div>
    <Header :isDark="isDarkMode" />
    <HeaderMobile :isDark="isDarkMode" />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  props: {
    isDarkMode: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
