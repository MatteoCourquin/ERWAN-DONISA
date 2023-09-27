<template>
  <div>
    <Header />
    <Burger />
    <!-- <SceenLoader /> -->
    <SceenLoader :isDisplay="loading" />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
