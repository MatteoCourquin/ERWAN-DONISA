<template>
  <div>
    <Header />
    <Burger />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@import "@/scss/main.scss";
</style>
