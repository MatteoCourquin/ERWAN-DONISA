<template>
  <section class="wrapper-slider">
    <div class="smooth-border smooth-border_left"></div>
    <div class="smooth-border smooth-border_right"></div>
    <div class="slider">
      <div class="box-blue"></div>
      <div class="box-blue"></div>
      <div class="box-blue"></div>
      <div class="box-blue"></div>
      <div class="box-blue"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.wrapper-slider {
  position: relative;
  width: 100%;
}

.slider {
  display: flex;
  width: 100%;
  overflow-x: scroll;
  padding: 0 100px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
}

.smooth-border {
  width: 20px;
  height: 100%;
  position: absolute;
  top: 0;
}

.smooth-border.smooth-border_left {
  left: 0;
  background: linear-gradient(to left, transparent 0%, $color-white 100%);
}

.smooth-border.smooth-border_right {
  right: 0;
  background: linear-gradient(to right, transparent 0%, $color-white 100%);
}

.box-blue {
  background: blue;
  border: 2px solid white;
  flex-wrap: nowrap;
  flex-shrink: 0;
  border-radius: $radius-main;
  width: 70%;
  height: 60vh;
}
</style>