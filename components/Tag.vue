<template>
  <div :class="['tag', isDark ? 'tag_dark' : 'tag_light']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    isDark: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.tag {
  padding: 4px 24px;
  font-size: 14px;
  backdrop-filter: blur(10px);
  border-radius: 999px;
  border: 1px solid #ffffff15;
}

.tag_dark {
  background-color: #33333318;
  color: #808080;
}

.tag_light {
  background-color: #f0f0f022;
  color: $color-white;
}
</style>
