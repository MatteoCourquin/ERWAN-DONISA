<template>
  <section class="flex justify-center items-center h-full text-center flex-col overflow-hidden py-paddingMain">
    <h2>
      {{ language == 'FRA' ?
        "MES SERVICES"
        :
        "MY SERVICES" }}</h2>
    <div class="my-16 relative w-full">
      <div ref="slider" @scroll="isScrollEnd"
        class="px-paddingMain slider w-full snap-mandatory snap-x overflow-x-scroll scroll-smooth flex flex-row gap-8">
        <div
          class="relative overflow-hidden border snap-center border-black flex flex-col justify-between w-[35vw] shrink-0 min-w-[280px] max-h-[600px] max-w-[350px] h-[60vh] min-h-[400px] rounded-radiusMain"
          v-for="(service, index) in services" :key="index">
          <div class="flex p-4 py-[5vh] h-full shrink overflow-hidden items-center justify-center flex-col">
            <h4 class="font-termina-500 !capitalize !text-lg mb-4">{{ service.title }}</h4>
            <p class="description-slider overflow-hidden">{{ service.description }}</p>
          </div>
          <div class="relative flex items-end shrink-0 justify-center min-h-max w-full h-1/2">
            <img class="absolute top-0 object-cover w-full h-full" :src="`/images/${service.urlImage}`"
              alt="description product">
            <div class="py-8 z-10">
              <BaseButton @click="$router.push(service.link)" size='small' color="white">
                {{ language == 'FRA' ?
                  "En savoir plus"
                  :
                  "Learn more" }}
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ButtonScroll :isDark="true" orientation="right" :onClick="scrollRight" />
  </section>
</template>

<script setup>
const language = useLanguage();
</script>
<script>
export default {
  name: 'Slider',
  data() {
    return {
      endScroll: false,
      services: [
        {
          title: 'Brand identity',
          description: "Découvrez l'art de la transformation visuelle. Avec mes services je vous créerais une image de marque sur mesure.",
          link: '/',
          urlImage: 'image1.jpg'
        },
        {
          title: 'Product Design',
          description: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          link: '/',
          urlImage: 'image2.jpg'
        },
        {
          title: 'Illustrations',
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
    scrollRight() {
      const container = this.$refs.slider;
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 1 ? container.scrollTo({ left: 0 }) : container.scrollTo({ left: container.scrollLeft + container.clientWidth })
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.description-slider {
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

.slider::-webkit-scrollbar {
  display: none;
}
</style>