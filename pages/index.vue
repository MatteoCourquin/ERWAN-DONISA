<template>
  <div>
    <Header />
    <Hero />
    <section class="wrapper-description-slider">
      <p class="item-description-slider">
        Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
        mattis.
      </p>
      <div class="item-description-slider">
        <h2>MY SERVICES</h2>
        <Slider />
        <NuxtLink class="link link_black" to="/">Scroll</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<style lang='scss'>
@import '~/assets/scss/main.scss';

.wrapper-description-slider{
  top: 100vh;
  background: $color-white;
  width: 100%;
  height: 200vh;
  display: grid;
  position: relative;
  grid-template-rows: repeat(2, 1fr);
  color: $color-black !important;
  &::before{
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: $radius-main;
    left: -10vw;
    top: 0;
    height: 100%;
    width: 100vw;
    background: white;
  }
  .item-description-slider{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    overflow: hidden;
  }
}
</style>