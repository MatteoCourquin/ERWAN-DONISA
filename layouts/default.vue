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
    }, 1000);
    var langueNavigateur = navigator.language || navigator.userLanguage;
    console.log(langueNavigateur)
    if (localStorage.getItem("langage")) {
      useLanguage().value = localStorage.getItem("langage");
    } else if (langueNavigateur == 'fr' || langueNavigateur == 'FR' || langueNavigateur == 'fr-FR') {
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
