<template>
  <section class="hero fixed top-0">
    <h1>DESIGNER /<br>
      ART DIRECTOR</h1>
    <button class="button button_big button_white">Let's meet</button>
    <NuxtLink to="/" class="link link_white">Scroll</NuxtLink>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {

    };
  },
  methods: {}
};
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh;
  padding: 0 $padding-main;
  transition: all 0.5s ease-in-out;

  @include respo-xs {
    align-items: flex-start;
    text-align: left;

    .link {
      align-self: end;
    }
  }

  h1 {
    margin-bottom: 30px;
    color: $color-white;
  }

  .link {
    position: absolute;
    bottom: 8vh;
  }
}
</style>