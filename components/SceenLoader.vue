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

@keyframes line-loader_big {
  0% {
    width: 16px;
  }
  50% {
    width: 32px;
  }
  100% {
    width: 16px;
  }
}

@keyframes line-loader_small {
  0% {
    width: 16px;
  }
  50% {
    width: 24px;
  }
  100% {
    width: 16px;
  }
}

.line-loader_big {
  animation: line-loader_big 2s infinite;
}
.line-loader_small {
  animation: line-loader_small 2s infinite;
}
.line-loader_1 {
  animation-delay: 0s;
}
.line-loader_2 {
  animation-delay: .15s;
}
.line-loader_3 {
  animation-delay: .3s;
}

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