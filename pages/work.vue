<template>
  <div>
    <section
      class="px-paddingMain z-[200] relative pt-44 pb-16 rounded-b-radiusMain bg-white text-black flex flex-col items-center text-center">
      <h1>My work</h1>
      <ButtonScroll :isDark="true" orientation="bottom" />
    </section>
    <CardRecentWork class="anim-curtain-section sticky bottom-0" v-for="(project, index) in projects" :key="index"
      :style="{ zIndex: 99 - index }" :title="project.title" :description="project.description" :link="`projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`"
      :urlImage="project.urlImage" :showDescription="false" />
  </div>
</template>

<script setup>
  const projects = useProjects();
</script>
<script>
import { gsap } from 'gsap';
export default {
  name: 'Work',
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
    useHeaderDark().value = true;
    this.animOpacity();
  },
}

</script>

<style scoped lang='scss'></style>