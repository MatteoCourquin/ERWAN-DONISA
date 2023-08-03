<template>
  <div ref="cube" :class="['cube', language == 'FRA' ? 'rotate' : '']"
    @click="language = language === 'FRA' ? 'ENG' : 'FRA'">
    <div class="face front">
      <p :class="['link link_underline', isDark ? 'link_black' : 'link_white']">ENG</p>
    </div>
    <div class="face top">
      <p :class="['link link_underline', isDark ? 'link_black' : 'link_white']">FRA</p>
    </div>
  </div>
</template>

<script setup>
const language = useLanguage()
</script>
<script>
export default {
  name: 'Language',
  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {}
}

</script>

<style scoped lang='scss'>
.cube {
  width: 60px;
  height: 30px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform .5s ease-in-out;
}

.face {
  display: flex;
  align-items: center;
}

.front {
  transform: translateZ(10px);
}

.top {
  transform: rotateX(-90deg) translateZ(-10px);
}

.rotate {
  transform: rotateX(90deg);
}</style>