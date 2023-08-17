<template>
  <div>
    <section
      class="px-paddingMain z-[200] relative pt-44 pb-16 rounded-b-radiusMain bg-white text-black flex flex-col items-center text-center">
      <h1>My work</h1>
      <ButtonScroll :isDark="true" orientation="bottom" />
    </section>
    <div v-for="(project, index) in projects" :key="index" class="anim-curtain-section sticky bottom-0"
      :style="{ zIndex: 99 - index }">
      <CardProject v-if="index < showProject" :title="project.title" :description="project.description" :urlImage="project.coverImage"
        :showDescription="false" />
    </div>
    <section
      class="anim-curtain-section sticky bottom-0 w-screen view-more z-10 rounded-b-radiusMain p-paddingMain bg-white flex items-center justify-center flex-col text-center">
      <BaseButton @click="showProject = showProject + 3" size='medium' color="black">more</BaseButton>
    </section>
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
    return {
      showProject: 3,
    };
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
  updated() {
    this.animOpacity();
  },
  mounted() {
    useHeaderDark().value = true;
    this.animOpacity();
  },
}

</script>

<style scoped lang='scss'></style>