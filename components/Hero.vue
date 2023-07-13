<template>
  <section class="hero">
    <h1>DESIGNER /
      ART DIRECTOR</h1>
    <button class="button button-big">Let's meet</button>
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
    font-size: clamp(2rem, 5vw, 5rem);
  }

  .link {
    position: absolute;
    bottom: 8vh;
  }
}</style>