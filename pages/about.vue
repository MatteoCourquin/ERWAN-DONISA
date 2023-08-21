<template>
  <div class="text-black z-10 sticky bottom-0">
    <section class="flex pt-44 flex-col h-screen bg-white text-center overflow-hidden">
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
      <img class="object-cover w-screen h-full" src="/images/background3.jpg">
    </section>
    <section class="bg-white text-center rounded-b-radiusMain px-paddingMain py-[10vh]">
      <h2 class="pb-8">{{ language == 'FRA' ?
          "Qui suis-je"
          :
          "Who I am" }}</h2>
      <p class="pb-paddingMain">{{ language == 'FRA' ?
          "Un Designer basé à Paris qui s'épanouit dans la création de produit digitaux et physique. Ce qui m’anime ? Concevoir et imaginer les objets qui nous entourent avec ma vision artistique ! En temps que passionné par le fashion design, mon objectif est de concevoir un jour une collection de vêtements pour une marque renommée."
          :
          "A Paris-based designer who thrives on creating digital and physical products. What drives me? Designing and imagining the objects that surround us with my artistic vision! As a passionate fashion designer, my goal is to one day design a clothing collection for a renowned brand." }}</p>
      <img class="rounded-lg object-cover w-screen h-[60vh]" src="/images/background-hero.jpg">
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