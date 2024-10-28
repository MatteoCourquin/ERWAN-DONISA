<template>
  <div class="text-black z-10 sticky bottom-0">
    <section class="flex pt-44 flex-col justify-center items-center lg:h-[70vh] bg-white text-center overflow-hidden">
      <div class="sm:px-paddingMain pb-16 px-paddingMain">
        <h1 class="whitespace-nowrap text-center">{{ language == 'FRA' ?
          "Salut, moi c'est"
          :
          "Hey, i'm" }}<br>Erwan Donisa</h1>
        <p class="description">{{ language == 'FRA' ?
          "Le Designer dont tu as besoin"
          :
          "The Designer you were looking for" }}</p>
      </div>
    </section>
    <NuxtImg class="object-cover w-screen h-screen" src="/images/erwan-about.webp" loading="lazy" />
    <section class="bg-white md:grid md:grid-cols-2 gap-gapMain rounded-b-radiusMain px-paddingMain py-[10vh]">
      <div class="flex flex-col pb-10 md:pb-0 justify-center md:px-paddingMain">
        <h2 class="pb-8">{{ language == 'FRA' ?
            "Qui suis-je"
            :
            "Who I am" }}</h2>
        <p>{{ language == 'FRA' ?
            "Je suis un Designer basé à Paris qui s'épanouit dans la création de produit digitaux et physique. Ce qui m’anime ? Concevoir et imaginer les objets qui nous entourent avec ma vision artistique ! En tant que passionné par le design, mon but est de donner vie à des idées en créant des visuels clairs et attractifs pour les marques."
            :
            "I'm a Paris-based designer who thrives on creating digital and physical products. What drives me? Designing and imagining the objects that surround us with my artistic vision ! As a passionate designer, my goal is to bring ideas to life by creating clear, attractive visuals for brands." }}</p>
      </div>
      <NuxtImg class="rounded-lg object-cover w-full" src="/images/erwan-about-drawing.webp" laoding="lazy" />
    </section>
  </div>
</template>

<script setup>
const language = useLanguage();
</script>
<script>
export default {
  name: 'About',
  data() {
    return {};
  },
  methods: {},
  mounted() {
    useHeaderDark().value = true;
  },
}
</script>

<style scoped lang='scss'></style>