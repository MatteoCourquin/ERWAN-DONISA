<template>
  <div>
    <Header :isDark="false" />
    <HeaderMobile :is-dark="false" />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang='scss'>
@import '@/scss/main.scss';
</style>
