<template>
  <div class="card-recent-work rounded-b-radiusMain w-full h-screen min-h-fit flex items-end"
    :style="{ '--background-image': `url('/images/${urlImage}')` }">
    <div
      class="card-recent-work-description px-paddingMain py-[10vh] w-full h-1/2 z-10 rounded-b-radiusMain flex flex-col items-center justify-end sm:items sm:flex-row sm:justify-between">
      <div class="w-full sm:w-2/3 text-center sm:text-left">
        <h2 :class="[!showDescription && 'pb-5 sm:pb-0']">{{ title }}</h2>
        <p class="my-5" v-if="showDescription">{{ description }}</p>
      </div>
      <BaseButton @click="$router.push(link)" size='small' color="white">View</BaseButton>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'CardRecentWork',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    urlImage: {
      type: String,
      required: true,
    },
    showDescription: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
};

</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.card-recent-work {
  background: var(--background-image) no-repeat center center;
  background-size: cover;
}

.card-recent-work-description {
  background: linear-gradient(to top, #00000090 0%, transparent 100%);

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>
