<template>
  <section class="flex justify-center items-center min-h-screen text-center flex-col overflow-hidden py-paddingMain">
    <h2>MY SERVICES</h2>
    <div class="my-16 relative w-full">
      <div ref="slider" class="slider w-full overflow-x-scroll scroll-smooth flex flex-row gap-8">
        <div
          class="first-of-type:ml-marginMain last-of-type:mr-marginMain relative overflow-hidden border border-black grid grid-rows-2 w-[70%] min-w-[280px] max-w-xs h-[60vh] min-h-[600px] rounded-radiusMain shrink-0 flex-nowrap"
          v-for="(project, index) in projects" :key="index">
          <div class="flex p-4 py-16 items-center flex-col">
            <h4 class="font-termina-500 !capitalize !text-lg mb-4">{{ project.title }}</h4>
            <p>{{ project.description }}</p>
          </div>
          <div class="relative">
            <img class="absolute top-0 object-cover h-full w-full" :src="`/images/${project.urlImage}`"
              alt="description product">
            <NuxtLink :to="project.link"
              class="absolute bottom-8 left-1/2 -translate-x-1/2 button button_small button_white">learn more</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <button @click="scrollLeft" class="link link_black">Scroll</button>
  </section>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
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