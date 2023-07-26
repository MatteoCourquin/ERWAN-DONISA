<template>
  <section class="flex justify-center items-center h-full text-center flex-col overflow-hidden py-paddingMain">
    <h2>MY SERVICES</h2>
    <div class="my-16 relative w-full">
      <div ref="slider" @scroll="isScrollEnd"
        class="px-paddingMain slider w-full overflow-x-scroll scroll-smooth flex flex-row gap-8">
        <div
          class="card-slider relative overflow-hidden border border-black flex flex-col w-[70%] min-w-[280px] max-h-[600px] max-w-xs h-[60vh] min-h-[400px] rounded-radiusMain"
          v-for="(project, index) in projects" :key="index">
          <div class="flex p-4 py-[5vh] items-center flex-col h-fit">
            <h4 class="font-termina-500 !capitalize !text-lg mb-4">{{ project.title }}</h4>
            <p>{{ project.description }}</p>
          </div>
          <div class="card-slider-item-bottom relative w-full h-full">
            <img class="absolute top-0 object-cover h-full w-full" :src="`/images/${project.urlImage}`"
              alt="description product">
            <NuxtLink :to="project.link"
              class="absolute bottom-8 left-1/2 -translate-x-1/2 button button_small button_white">learn more</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <button @click="scrollLeft" class="flex items-center gap-2 link link_black link_underline">
      Scroll
      <Arrow :isDark="true" :orientation="endScroll ? 'bottom' : 'right'" />
    </button>
  </section>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      endScroll: false,
      projects: [
        {
          title: 'Super Project',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image.jpg'
        },
        {
          title: 'Project super',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image.jpg'
        },
        {
          title: 'super project',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image.jpg'
        },
        {
          title: 'Superoject',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image.jpg'
        },
        {
          title: 'Superoject',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image.jpg'
        },
        {
          title: 'Superoject',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image.jpg'
        },
        {
          title: 'Superoject',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image.jpg'
        },
        {
          title: 'Superoject',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image.jpg'
        },
      ]
    };
  },
  methods: {
    isScrollEnd() {
      const container = this.$refs.slider;
      this.endScroll = container.scrollLeft + container.clientWidth >= container.scrollWidth - 100
    },
    scrollLeft() {
      const container = this.$refs.slider;
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 1 ? container.scrollTo({ left: 0 }) : container.scrollTo({ left: container.scrollLeft + container.clientWidth })
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.slider::-webkit-scrollbar {
  display: none;
}
</style>