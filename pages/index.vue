<template>
  <div>
    <!-- <Header />
    <Hero />
    <section class="wrapper-description-slider">
      <p class="item-description-slider">
        Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
        mattis.
      </p>
      <div class="item-description-slider">
        <h2>MY SERVICES</h2>
        <Slider />
        <NuxtLink class="link link_black" to="/">Scroll</NuxtLink>
      </div>
    </section> -->
    <div v-for="project in projects" :key="project.id" >
      <CardRecentWork :title="project.title" :description="project.description" :link="project.link" :background="project.background" />
    </div>
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
          background: '~/images/image.jpg'
        },
        {
          title: 'Project 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          background: '~/images/image.jpg'
        },
        {
          title: 'Project 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          background: '~/images/image.jpg'
        },
      ]
    };
  },
  methods: {}
};
</script>

<style lang='scss'>
@import '@/scss/main.scss';

.wrapper-description-slider {
  background: $color-white;
  width: 100%;
  height: 200vh;
  display: grid;
  position: relative;
  grid-template-rows: repeat(2, 1fr);
  color: $color-black !important;
  border-radius: $radius-main;
  padding: 0 $padding-main;

  .item-description-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    overflow: hidden;
  }

  p.item-description-slider {
    font-size: 30px;
  }
}</style>
