<template>
  <div class="card-recent-work rounded-b-radiusMain w-full h-screen relative flex items-end"
    :style="{ '--background-image': `url('/images/${urlImage}')` }">
    <div class="card-recent-work-description w-full h-1/2 z-10 rounded-b-radiusMain flex flex-col items-center justify-center sm:flex-row sm:justify-between">
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
  methods: {},
  mounted() {
    // let cards = gsap.utils.toArray('.card-recent-work');
    // cards.forEach((card, i) => {
    //   ScrollTrigger.create({
    //     trigger: card,
    //     start: 'bottom bottom',
    //     // end: 'top top',
    //     pin: true,
    //     pinSpacing: false,
    //     scrub: true,
    //     snap: 1,
    //     // snap: 1 / (cards.length - 1),
    //     markers: true,
    //   })
    // });
  },
};


</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.card-recent-work::after {
  content: '';
  position: absolute;
  width: 100%;
  height: calc(100% + 25px);
  bottom: 0;
  background: var(--background-image) no-repeat center center;
  background-size: cover;
  border-radius: 0 0 $radius-main $radius-main;
}

.card-recent-work-description {
  background: linear-gradient(to top, #00000090 0%, transparent 100%);
  padding: clamp(1rem, 6vw, 7rem);
}
</style>
