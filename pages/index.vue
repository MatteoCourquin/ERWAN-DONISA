<template>
  <div id="page-index">
    <Hero />
    <section
      class="anim-curtain-section sticky rounded-radiusMain bottom-0 h-[200vh] bg-white w-full grid grid-rows-2 z-[100] !text-black">
      <p class="px-paddingMain flex justify-center h-screen items-center text-center flex-col overflow-hidden text-3xl">
        Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
        mattis.
      </p>
      <Slider />
    </section>
    <CardRecentWork class="anim-curtain-section sticky bottom-0" v-for="(project, index) in projects" :key="index"
      :style="{ zIndex: 99 - index }" :title="project.title" :description="project.description" :link="project.link"
      :urlImage="project.urlImage" />
    <section
      class="anim-curtain-section sticky bottom-0 w-screen view-more z-10 rounded-b-radiusMain p-paddingMain bg-white flex items-center justify-center flex-col text-center">
      <h3 class="text-black mb-10">Check the others</h3>
      <NuxtLink class="button button_medium button_black" to="/">more</NuxtLink>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'index',
  layout: 'default',
  data() {
    return {
      projects: [
        {
          title: 'Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nulla facilisi. Sed euismod, nunc vel aliquam aliquet, nisl nunc aliquet nunc, quis aliquam nunc nunc nec nunc.',
          link: '/',
          urlImage: 'image1.jpg'
        },
        {
          title: 'Project 2',
          description: 'Delectus odio sed nesciunt eveniet placeat nobis corrupti aliquam blanditiis assumenda animi architecto illum ipsa.',
          link: '/',
          urlImage: 'image2.jpg'
        },
        {
          title: 'Project 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus odio sed nesciunt eveniet placeat nobis corrupti aliquam blanditiis assumenda animi architecto illum ipsa, saepe, ad nemo modi atque accusamus debitis, dolorum autem aspernatur! Neque, mollitia fugiat nostrum veritatis aspernatur exercitationem.',
          link: '/',
          urlImage: 'image3.jpg'
        },
      ]
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
        tl.to(el, { position: 'sticky'});
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
