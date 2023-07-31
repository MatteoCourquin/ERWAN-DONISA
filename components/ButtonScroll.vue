<template>
  <div>
    <button @click="onClick ? onClick() : scroll()" :class="['flex items-center gap-2 link link_underline', isDark ? 'link_dark' : 'link_white']">
      <svg
        :class="['transition-all', orientation === 'top' && 'rotate-180', orientation === 'right' && '-rotate-90', orientation === 'bottom' && 'rotate-0', orientation === 'left' && 'rotate-90']"
        width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :class="[isDark ? 'fill-black' : 'fill-white']"
          d="M7.8872 14.2653C8.34565 14.7237 9.08893 14.7237 9.54737 14.2653L17.0181 6.79455C17.4765 6.33611 17.4765 5.59283 17.0181 5.13439C16.5597 4.67595 15.8164 4.67595 15.3579 5.13439L8.71729 11.775L2.07663 5.13439C1.61819 4.67595 0.874909 4.67595 0.416467 5.13439C-0.0419748 5.59283 -0.0419748 6.33611 0.416467 6.79455L7.8872 14.2653ZM7.54337 0.130859L7.54337 13.4352L9.8912 13.4352L9.8912 0.130859L7.54337 0.130859Z" />
      </svg>
      Scroll
    </button>
  </div>
</template>

<script>

export default {
  name: '',
  props: {
    isDark: Boolean,
    onClick: Function,
    orientation: 'top' | 'bottom' | 'left' | 'right'
  },
  data() {
    return {};
  },
  methods: {
    scroll() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    },
  }
}

</script>

<style scoped lang='scss'></style>