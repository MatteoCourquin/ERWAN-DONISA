<template>
  <div id="page-index">
    <Hero v-if="isBackground" />
    <section
      class="anim-curtain-section rounded-radiusMain h-[200vh] bg-white w-full grid grid-rows-2 z-[100] !text-black">
      <p
        class="px-paddingMain flex justify-center h-screen items-center text-center flex-col overflow-hidden text-4xl sm:text-5xl lg:text-6xl lg:w-3/4 mx-auto">
        {{ language == 'FRA' ?
          "Mon job, donner vie à votre marque à travers chaque création. Pour faire de vous la référence de votre domaine."
          :
          "My job is to bring your brand to life with every creation.To make you the benchmark in your field." }}
      </p>
      <Slider />
    </section>
    <div v-for="(project, index) in projects" :key="index" class="anim-curtain-section" :style="{ zIndex: 99 - index }">
      <CardProject v-if="index < 3" :title="project.title" :description="project.description"
        :urlImage="project.coverImage" />
    </div>
    <section
      class="anim-curtain-section w-full view-more z-10 rounded-b-radiusMain p-paddingMain bg-white flex items-center justify-center flex-col text-center">
      <h3 class="text-black mb-10">
        {{ language == 'FRA' ?
          "EN SAVOIR PLUS"
          :
          "CHECK THE OTHERS" }}
      </h3>
      <BaseButton @click="$router.push('/work')" size='medium' hover="red" color="black">{{ language == 'FRA' ?
        "Plus"
        :
        "More" }}</BaseButton>
    </section>
  </div>
</template>

<script setup>
const projects = useProjects();
const language = useLanguage();
</script>
<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'index',
  layout: 'default',
  data() {
    return {
      isBackground: true,
    };
  },
  methods: {
    animParallax() {
      gsap.utils.toArray('.anim-curtain-section').forEach((el, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        });
        tl.to(el, { position: 'sticky' });
        tl.reverse()
          .eventCallback('onReverseComplete', () => {
            gsap.set(el, { position: 'relative' });
          });
      });
    },
    checkedScroll() {
      const scrolledDistance = window.scrollY || window.pageYOffset;
      this.isBackground = scrolledDistance <= window.innerHeight * 1.2
    },
  },
  updated() {
    this.animParallax();
  },
  mounted() {
    this.animParallax();
    useHeaderDark().value = false;
    window.addEventListener('scroll', this.checkedScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkedScroll)
  },
};
</script>

<style lang='scss'>
@import '@/scss/main.scss';

#page-index {
  padding-top: 100vh;
}

.anim-curtain-section {
  position: relative;
  bottom: 0;
}

.view-more::after {
  content: '';
  position: absolute;
  top: -25px;
  left: 0;
  width: 100%;
  height: 25px;
  background-color: $color-white;
  z-index: 1;
}
</style>
