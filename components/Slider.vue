<template>
  <section class="relative w-full">
    <div class="slider w-full overflow-x-scroll scroll-smooth	px-paddingMain flex flex-row gap-8">
      <div
        class="relative overflow-hidden border border-black grid grid-rows-2 w-[70%] min-w-[280px] max-w-xs h-[60vh] rounded-radiusMain shrink-0 flex-nowrap"
        v-for="(project, index) in projects" :key="index">
        <div class="flex p-4 pt-16 items-center flex-col">
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
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.slider::-webkit-scrollbar {
  display: none;
}
</style>