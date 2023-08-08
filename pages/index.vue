<template>
  <div id="page-index">
    <Hero />
    <section
      class="anim-curtain-section sticky rounded-radiusMain bottom-0 h-[200vh] bg-white w-full grid grid-rows-2 z-[100] !text-black">
      <p class="px-paddingMain flex justify-center h-screen items-center text-center flex-col overflow-hidden text-3xl lg:text-5xl lg:w-3/4 mx-auto">
        Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
        mattis.
      </p>
      <Slider />
    </section>
    <div v-for="(project, index) in projects" :key="index" class="anim-curtain-section sticky bottom-0"
      :style="{ zIndex: 99 - index }">
      <CardRecentWork v-if="index < 3" :title="project.title" :description="project.description"
        :urlImage="project.image" />
    </div>
    <section
      class="anim-curtain-section sticky bottom-0 w-full view-more z-10 rounded-b-radiusMain p-paddingMain bg-white flex items-center justify-center flex-col text-center">
      <h3 class="text-black mb-10">Check the others</h3>
      <BaseButton @click="$router.push('/work')" size='medium' color="black">more</BaseButton>
    </section>
  </div>
</template>

<script setup>
const projects = useProjects();
</script>
<script>
import { gsap } from 'gsap';

export default {
  name: 'index',
  layout: 'default',
  data() {
    return {};
  },
  methods: {
    animOpacity() {
      gsap.utils.toArray('.anim-curtain-section').forEach((el, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
          },
        });
        tl.to(el, { position: 'sticky' });
      });
    }
  },
  mounted() {
    useHeaderDark().value = false;
    this.animOpacity();
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
