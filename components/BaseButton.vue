<template>
  <button @mouseleave="isActive = false" @mouseenter="(event) => mouseEnter(event)"
    :class="[`button button_${size} button_${color}`,
      isActive && color === 'black' && 'active'
    ]">
    <div ref="circleButton" :class="['circle-button z-0 rounded-full transition-all absolute',
      isActive && 'active',
      color === 'white' && 'bg-black',
      color === 'black' && 'bg-white',
      color === 'red' && 'bg-white'
    ]">
    </div>
    <div :class="['relative z-10 transition-all',
      isActive && color === 'white' && 'text-white',
      isActive && color === 'black' && 'text-black',
      isActive && color === 'red' && 'text-black'
    ]">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    color: {
      type: String,
      default: 'white',
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    mouseEnter(event) {
      const bounding = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - bounding.left
      const y = event.clientY - bounding.top
      this.isActive = true
      this.$refs.circleButton.style.left = `${x}px`
      this.$refs.circleButton.style.top = `${y}px`
    },
  },
}
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.button {
  border: 0;
  border-radius: 999px;
  text-transform: uppercase;
  font-family: $font-loos-regular;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;
  white-space: nowrap;
  height: fit-content;
  width: fit-content;
}

.circle-button {
  width: 900px;
  height: 900px;
  transition: transform 0.4s cubic-bezier(.66, 0, .35, 1);
  transform: translate(-50%, -50%) scale(0);
}

.circle-button.active {
  transform: translate(-50%, -50%) scale(1);
}

.button_white {
  background: $color-white;
  color: $color-black;
}

.button_black {
  background: $color-black;
  color: $color-white;
}

.button_red {
  background: $color-red;
  color: $color-white;
}

.button_big {
  padding: 18px 70px;
  font-size: clamp(16px, 2.2vw, 23px);
}

.button_medium {
  padding: 15px 60px;
  font-size: clamp(16px, 2vw, 18px);
}

.button_small {
  padding: 10px 50px;
  font-size: clamp(16px, 2vw, 15px);
}
</style>
