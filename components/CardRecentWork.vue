<template>
  <div class="card-recent-work">
    <div class="card-recent-work-description">
      <div class="description">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <NuxtLink class="button button-medium link_white" :to="link">View project</NuxtLink>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'CardRecentWork',
  props: ['title', 'description', 'link', 'background'],
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let cards = gsap.utils.toArray('.card-recent-work');
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'bottom bottom',
        // end: 'top top',
        pin: true,
        pinSpacing: false,
        scrub: true,
        snap: 1,
        // snap: 1 / (cards.length - 1),
        markers: true,
      })
    });
  },
};


</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.card-recent-work {
  border-radius: 0 0 $radius-main $radius-main;
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  display: flex;
  align-items: flex-end;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: calc(100% + 25px);
    bottom: 0;
    z-index: -1;
    background: url('~/images/image.jpg') no-repeat center center;
    background-size: cover;
    border-radius: 0 0 $radius-main $radius-main;
  }
}

.card-recent-work-description {
  width: 100%;
  height: 50%;
  // background: linear-gradient(to top, #000000 0%, transparent 100%);
  border-radius: 0 0 $radius-main $radius-main;
  color: white !important;
  padding: clamp(1rem, 6vw, 7rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include respo-xs {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .description {
    width: 100%;
    text-align: center;

    @include respo-xs {
      text-align: left;
      width: 60%;
    }

    p {
      margin: 20px 0;
    }
  }
}
</style>
