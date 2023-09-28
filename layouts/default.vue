<template>
  <div>
    <Header />
    <Burger />
    <ScreenLoader ref="screenLoader" :isDisplay="loading" />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const language = useLanguage()
</script>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
    var langueNavigateur = navigator.language || navigator.userLanguage;
    if (langueNavigateur == 'fr') {
      useLanguage().value = 'FRA';
    } else {
      useLanguage().value = 'ENG';
    }
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
