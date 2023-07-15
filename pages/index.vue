<template>
  <div id="page-index">
    <img class="fixed top-0 left-0 w-full h-full object-cover" src="/images/background-hero.png" alt="background" />
    <Header :isDark="false" />
    <Hero />
    <section class="rounded-radiusMain bg-white w-full grid grid-rows-2 relative z-[100] !text-black">
      <p class="px-paddingMain flex justify-center h-screen items-center text-center flex-col overflow-hidden text-3xl">
        Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
        mattis.
      </p>
      <Slider />
    </section>
    <section>
      <div v-for="(project, index) in projects" :key="index">
        <CardRecentWork :style="{ zIndex: 99 - index }" :title="project.title" :description="project.description"
          :link="project.link" :urlImage="project.urlImage" />
      </div>
      <div
        class="view-more z-10 rounded-b-radiusMain p-paddingMain relative bg-white flex items-center justify-center flex-col text-center">
        <h3 class="text-black mb-10">Check the others</h3>
        <NuxtLink class="button button_medium button_black" to="/">more</NuxtLink>
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

@supports (-webkit-overflow-scrolling: touch) {
  #page-index {
    background-attachment: scroll
  }
}

#page-index {
  position: relative;
  padding-top: 100vh;
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
