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
          v-for="(service, index) in (language == 'FRA' ? servicesFrench : servicesEnglish)" :key="index">
          <div class="flex p-4 py-[5vh] h-full shrink overflow-hidden items-center justify-center flex-col">
            <h4 class="font-loos-regular !capitalize !text-lg mb-4">{{ service.title }}</h4>
            <p class="description-slider overflow-hidden">{{ service.description }}</p>
          </div>
          <div class="relative flex items-end shrink-0 justify-center min-h-max w-full h-1/2">
            <NuxtImg :src="`/images/${service.urlImage}`" alt="description product" class="absolute top-0 object-cover w-full h-full" loading="lazy" />
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
      servicesFrench: [
        {
          title: 'Branding',
          description: "Découvrez l'art de la transformation visuelle, avec mes services je vous créerais une image de marque sur mesure.",
          link: '/',
          urlImage: 'image1.jpg'
        },
        {
          title: 'Fashion design',
          description: "Créez votre style distinctif avec mes designs uniques, fusionnant élégance et créativité pour vous démarquer dans l'univers de la mode.",
          link: '/',
          urlImage: 'image2.jpg'
        },
        {
          title: 'Design de produits',
          description: "Laissez-moi vous créer des solutions qui marient élégance et utilité, redéfinissant ainsi votre quotidien.",
          link: '/',
          urlImage: 'image3.jpg'
        },
        {
          title: 'Illustrations',
          description: 'Je donnerai vie de vos projets en transformant vos idées en oeuvres captivantes.',
          link: '/',
          urlImage: 'image3.jpg'
        },
        {
          title: 'Web design',
          description: 'Façonnez votre présence en ligne avec mon expertise en conception web. Pour créer des expériences digitales engageantes et durable.',
          link: '/',
          urlImage: 'image5.jpg'
        },
      ],
      servicesEnglish: [
        {
          title: 'Branding',
          description: "Eng - Découvrez l'art de la transformation visuelle, avec mes services je vous créerais une image de marque sur mesure.",
          link: '/',
          urlImage: 'image1.jpg'
        },
        {
          title: 'Fashion design',
          description: "Eng - Créez votre style distinctif avec mes designs uniques, fusionnant élégance et créativité pour vous démarquer dans l'univers de la mode.",
          link: '/',
          urlImage: 'image2.jpg'
        },
        {
          title: 'Design de produits',
          description: "Eng - Laissez-moi vous créer des solutions qui marient élégance et utilité, redéfinissant ainsi votre quotidien.",
          link: '/',
          urlImage: 'image3.jpg'
        },
        {
          title: 'Illustrations',
          description: 'Eng - Je donnerai vie de vos projets en transformant vos idées en oeuvres captivantes.',
          link: '/',
          urlImage: 'image4.jpg'
        },
        {
          title: 'Web design',
          description: 'Eng - Façonnez votre présence en ligne avec mon expertise en conception web. Pour créer des expériences digitales engageantes et durable.',
          link: '/',
          urlImage: 'image5.jpg'
        },
      ],
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