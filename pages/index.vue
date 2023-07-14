<template>
  <div id="page-index">
    <Header :isDark="false" />
    <Hero />
    <section class="wrapper-description-slider bg-white w-full grid grid-rows-2 relative z-10 !text-black">
      <p class="flex justify-center items-center text-center flex-col overflow-hidden text-3xl">
        Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
        mattis.
      </p>
      <div class="flex justify-center items-center text-center flex-col overflow-hidden">
        <h2>MY SERVICES</h2>
        <Slider />
        <NuxtLink class="link link_black" to="/">Scroll</NuxtLink>
      </div>
    </section>
    <section>
      <div v-for="(project, index) in projects" :key="index">
        <CardRecentWork :style="{ zIndex: 9 - index }" :title="project.title" :description="project.description"
          :link="project.link" :urlImage="project.urlImage" />
      </div>
      <div class="view-more relative bg-white flex items-center justify-center flex-col text-center">
        <h3 class="text-black mb-10">Check the others</h3>
        <NuxtLink class="button button_medium button_black" to="/">Scroll</NuxtLink>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      projects: [
        {
          title: 'Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image.jpg'
        },
        {
          title: 'Project 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image.jpg'
        },
        {
          title: 'Project 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image.jpg'
        },
      ]
    };
  },
  methods: {}
};
</script>

<style lang='scss'>
@import '@/scss/main.scss';

#page-index {
  position: relative;
  background: url('~/images/background-hero.png') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  padding-top: 100vh;
}

.wrapper-description-slider {
  height: 200vh;
  border-radius: $radius-main;
  padding: 0 $padding-main;
}

.view-more {
  padding: $padding-main;
  border-radius: 0 0 $radius-main $radius-main;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: -25px;
    left: 0;
    width: 100%;
    height: 25px;
    background-color: $color-white;
    z-index: 1;
  }
}
</style>
