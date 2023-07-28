<template>
  <div class="text-black">
    <section class="flex pt-44 flex-col h-screen bg-white text-center overflow-hidden">
      <div class="px-paddingMain pb-16">
        <h1 class="">Hey, i'm <br>Erwan Donisa</h1>
        <p>The Designer you was looking for</p>
      </div>
      <img class="object-cover w-screen h-full" src="/images/background3.jpg">
    </section>
    <section class="bg-white text-center rounded-b-radiusMain px-paddingMain py-[10vh]">
      <h2 class="pb-8">Who I am</h2>
      <p class="pb-paddingMain">Bexy Glow needed a tone of voice as confident as their visual identity. We positioned them as modern, fun-loving and empowered, using descriptive adjectives, idioms and figurative language to engage their clientele and accentuate their striking products.</p>
      <img class="rounded-lg object-cover w-screen h-[60vh]" src="/images/background-hero.jpg">
    </section>
  </div>
</template>

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