<template v-if="isLoaded">
  <div class="w-full relative overflow-hidden h-screen min-h-fit flex items-end rounded-b-radiusMain">
    <NuxtImg @load="isLoaded = true" :src="`https:${urlImage}`" alt="image project"
      class="object-cover w-full h-full absolute inset-0" sizes='xs:400 sm:700 md:800 lg:1400 xl:1800' />
    <div
      :class="['card-project-description px-paddingMain py-[10vh] w-full h-1/2 z-10 flex flex-col items-center justify-end', showDescription ? 'sm:flex-row sm:justify-between' : 'sm:flex-col']">
      <div :class="['', showDescription ? 'w-full sm:w-2/3 text-center sm:text-left' : 'text-center']">
        <div v-if="projectTypes" class="flex gap-4 justify-center pb-4">
          <p v-for="(type, index) in projectTypes" :key="index">
            <Tag :isDark="false">{{ type.fields.name }}</Tag>
          </p>
        </div>
        <h2 :class="!showDescription && 'pb-5'">{{ title }}</h2>
        <p class="my-5 lg:w-2/3" v-if="showDescription">{{ description }}</p>
      </div>
      <BaseButton @click="$router.push(`projects/${title.replace(/\s+/g, '-').toLowerCase()}`)" size="medium"
        hover="black" color="white" class="!w-full sm:!w-auto" aria-label="Voir le projet {{ title }}">
        {{ language == 'FRA' ? "Voir" : "View" }}
      </BaseButton>
    </div>
  </div>
</template>


<script setup>
const language = useLanguage()
</script>
<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'CardProject',
  props: {
    title: {
      type: String,
      required: true,
    },
    projectTypes: {
      type: Array,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    urlImage: {
      type: String,
      required: true,
    },
    showDescription: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  // mounted() {
  // !useTouchDevive().value && this.initParallax();
  // },
  // updated() {
  // !useTouchDevive().value && this.initParallax();
  // },
  // methods: {
  // initParallax() {
  //   gsap.utils.toArray('.parallax-image').forEach((image, index) => {
  //     gsap.set(image, { transformOrigin: 'center' });
  //     gsap.timeline({
  //       scrollTrigger: {
  //         id: `parallax-trigger-${index}`,
  //         trigger: image,
  //         start: 'top bottom',
  //         end: 'bottom top',
  //         scrub: true,
  //         onUpdate: (self) => {
  //           const translateY = -(self.progress - 0.5) * 100 * (index === 2 ? 0.25 : 0.1);
  //           gsap.set(image, { y: `${translateY}%` });
  //         },
  //       },
  //     });
  //   });
  // },
  // },
};

</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.card-project-description {
  background: linear-gradient(to top, #00000090 0%, transparent 100%);

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 4;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>
