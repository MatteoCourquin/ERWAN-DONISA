<template>
  <section class="flex justify-center items-center h-full text-center flex-col overflow-hidden py-paddingMain">
    <h2>MY SERVICES</h2>
    <div class="my-16 relative w-full">
      <div ref="slider" @scroll="isScrollEnd"
        class="px-paddingMain slider w-full overflow-x-scroll scroll-smooth flex flex-row gap-8">
        <div
          class="relative overflow-hidden border border-black flex flex-col justify-between w-[70%] min-w-[280px] max-h-[600px] max-w-xs h-[60vh] min-h-[400px] rounded-radiusMain"
          v-for="(project, index) in projects" :key="index">
          <div class="flex p-4 py-[5vh] shrink overflow-hidden items-center flex-col">
            <h4 class="font-termina-500 !capitalize !text-lg mb-4">{{ project.title }}</h4>
            <p class="overflow-hidden">{{ project.description }}</p>
          </div>
          <div class="relative flex items-end shrink-0 justify-center min-h-max w-full h-1/2">
            <img class="absolute top-0 object-cover w-full h-full" :src="`/images/${project.urlImage}`"
              alt="description product">
            <div class="py-8 z-10">
              <NuxtLink :to="project.link" class="button button_small button_white">learn more</NuxtLink>
            </div>
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
          title: 'Lorme project',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image1.jpg'
        },
        {
          title: 'Ipsome Dolor sit',
          description: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image2.jpg'
        },
        {
          title: 'Superoject',
          description: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: '/',
          urlImage: 'image3.jpg'
        },
        {
          title: 'Nunc vulputate libero',
          description: 'Ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate mattis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus odio sed nesciunt eveniet placeat nobis corrupti.',
          link: '/',
          urlImage: 'image4.jpg'
        },
        {
          title: 'Lorem ipsum dolor sit',
          description: 'Sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image5.jpg'
        },
        {
          title: 'Consectetur adipiscing elit',
          description: 'Lorem sit amet, consectetur adipiscing elit. Nunc vulputate velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image6.jpg'
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