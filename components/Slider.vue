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
            <p class="font-archivo-regular !normal-case !text-lg mb-4">{{ service.title }}</p>
            <p class="description-slider overflow-hidden">{{ service.description }}</p>
          </div>
          <div class="relative flex items-end shrink-0 justify-center min-h-max w-full h-1/2">
            <NuxtImg :src="`/images/${service.urlImage}`" :alt="service.title" class="absolute top-0 object-cover w-full h-full" loading="lazy" />
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
          urlImage: 'branding.webp'
        },
        {
          title: 'Fashion Design',
          description: "Créez votre style distinctif avec mes designs uniques, fusionnant élégance et créativité pour vous démarquer dans l'univers de la mode.",
          link: '/',
          urlImage: 'fashion-design.webp'
        },
        {
          title: 'Design de Produits',
          description: "Laissez-moi vous créer des solutions qui marient élégance et utilité, redéfinissant ainsi votre quotidien.",
          link: '/',
          urlImage: 'product-design.webp'
        },
        {
          title: 'Illustrations',
          description: 'Je donnerai vie de vos projets en transformant vos idées en oeuvres captivantes.',
          link: '/',
          urlImage: 'illustration.webp'
        },
        {
          title: 'Web Design',
          description: 'Façonnez votre présence en ligne avec mon expertise en conception web. Pour créer des expériences digitales engageantes et durable.',
          link: '/',
          urlImage: 'web-design.webp'
        },
      ],
      servicesEnglish: [
        {
          title: 'Branding',
          description: "Discover the art of visual transformation. With my services, I will craft a unique brand identity just for you.",
          link: '/',
          urlImage: 'branding.webp'
        },
        {
          title: 'Fashion Design',
          description: "Create your own style with my unique designs, combining elegance and creativity to make you stand out in the fashion world.",
          link: '/',
          urlImage: 'fashion-design.webp'
        },
        {
          title: 'Product Design',
          description: "Let me create solutions for you that blend elegance and utility, redefining your everyday life.",
          link: '/',
          urlImage: 'product-design.webp'
        },
        {
          title: 'Illustrations',
          description: "I'll bring your projects to life, transforming your ideas into captivating peace of art.",
          link: '/',
          urlImage: 'illustration.webp'
        },
        {
          title: 'Web Design',
          description: 'Shape your online presence with my web design expertise. To create engaging and sustainable digital experiences.',
          link: '/',
          urlImage: 'web-design.webp'
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