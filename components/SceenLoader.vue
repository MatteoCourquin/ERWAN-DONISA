<template>
  <div :class="['bg-black fixed top-0 left-0 w-screen h-screen z-[999] flex items-center justify-center transition duration-300', isDisplay ? 'opacity-100' : 'opacity-0 hidden']">
    <div class="flex items-center flex-col">
      <div class="bg-white rounded-lg w-40 flex flex-col gap-2 p-3">
        <div class="line-loader line-loader_big line-loader_1 bg-black w-8 h-2 rounded-full"></div>
        <div class="line-loader line-loader_small line-loader_2 bg-black w-4 h-2 rounded-full"></div>
        <div class="line-loader line-loader_big line-loader_3 bg-black w-8 h-2 rounded-full"></div>
      </div>
      <h1>LOADING</h1>
      <div class="flex gap-3 items-center justify-center pt-4">
        <div class="dot-bounce dot-bounce_1 bg-white rounded-full w-4 h-4 animate-bounce"></div>
        <div class="dot-bounce dot-bounce_2 bg-white rounded-full w-4 h-4 animate-bounce"></div>
        <div class="dot-bounce dot-bounce_3 bg-white rounded-full w-4 h-4 animate-bounce"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SceenLoader',
  props: {
    isDisplay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {}
}

</script>

<style scoped lang='scss'>

.dot-bounce {
  animation-duration: 1s;
}
.dot-bounce_1 {
  animation-delay: 0s;
}
.dot-bounce_2 {
  animation-delay: .15s;
}
.dot-bounce_3 {
  animation-delay: .3s;
}

  
</style>