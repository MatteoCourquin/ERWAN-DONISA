<template>
  <div class="w-full relative overflow-hidden h-screen min-h-fit flex items-end rounded-b-radiusMain">
    <div class="parallax-image" :style="{ '--background-image': `url('https:${urlImage}')` }"></div>
    <div
      :class="['card-project-description px-paddingMain py-[10vh] w-full h-1/2 z-10 flex flex-col items-center justify-end', showDescription ? 'sm:flex-row sm:justify-between' : 'sm:flex-col']">
      <div :class="['', showDescription ? 'w-full sm:w-2/3 text-center sm:text-left' : 'text-center']">
        <h2 :class="!showDescription && 'pb-5'">{{ title }}</h2>
        <p class="my-5" v-if="showDescription">{{ description }}</p>
      </div>
      <BaseButton @click="$router.push(`projects/${title.replace(/\s+/g, '-').toLowerCase()}`)" size="small" color="white"
        class="!w-full sm:!w-auto">View</BaseButton>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'CardProject',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
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
  mounted() {
    !useTouchDevive().value && this.initParallax();
  },
  methods: {
    initParallax() {
      gsap.utils.toArray('.parallax-image').forEach((image, index) => {
        gsap.set(image, { transformOrigin: 'center' });
        gsap.timeline({
          scrollTrigger: {
            id: `parallax-trigger-${index}`,
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            onUpdate: (self) => {
              const translateY = -(self.progress - 0.5) * 100 * (index === 2 ? 0.25 : 0.1);
              gsap.set(image, { y: `${translateY}%` });
            },
          },
        });
      });
    },
  },
};

</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.parallax-image {
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;
  height: 130%;
  transform: translateY(0%);
  background: var(--background-image) no-repeat center center;
  background-size: cover;
}

.card-project-description {
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
