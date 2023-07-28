<template>
  <div class="card-recent-work rounded-b-radiusMain w-full h-screen min-h-fit flex items-end"
    :style="{ '--background-image': `url('/images/${urlImage}')` }">
    <div
      class="card-recent-work-description px-paddingMain py-[10vh] w-full h-1/2 z-10 rounded-b-radiusMain flex flex-col items-center justify-end sm:items sm:flex-row sm:justify-between">
      <div class="w-full sm:w-2/3 text-center sm:text-left">
        <h2>{{ title }}</h2>
        <p class="my-5">{{ description }}</p>
      </div>
      <NuxtLink class="button button_small button_white" :to="link">View</NuxtLink>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'CardRecentWork',
  props: ['title', 'description', 'link', 'urlImage'],
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
}
</style>
