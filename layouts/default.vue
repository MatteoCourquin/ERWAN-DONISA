<template>
  <div>
    <Header :isDark="isDarkMode" />
    <Burger/>
    <main class="pb-[80vh]">
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
