<template>
  <div>
    <section
      class="px-paddingMain z-[200] relative pt-44 pb-16 rounded-b-radiusMain bg-white text-black flex flex-col items-center text-center">
      <h1>{{ language == "FRA" ? 'Mes projets' : 'MY PROJECTS' }}</h1>
      <ButtonScroll :isDark="true" orientation="bottom" />
    </section>
    <div v-for="(project, index) in useProjects().value" :key="index" class="sticky bottom-0"
      :style="{ zIndex: 99 - index }">
      <CardProject :class="[index < showProject ? 'visible' : 'invisible']" v-if="index < showProject" :title="project.title"
        :description="project.description" :urlImage="project.coverImage" :showDescription="false" />
    </div>
    <section v-if="isMore"
      class="sticky bottom-0 w-screen view-more z-10 rounded-b-radiusMain p-paddingMain bg-white flex items-center justify-center flex-col text-center">
      <h3 class="text-black mb-10">
        {{ language == 'FRA' ?
          "Voir les autres"
          :
          "CHECK THE OTHERS" }}
      </h3>
      <BaseButton @click="showMoreProject" size='medium' color="black">{{ language == 'FRA' ?
        "Plus"
        :
        "More" }}</BaseButton>
    </section>
  </div>
</template>

<script setup>
const language = useLanguage();
</script>
<script>
export default {
  name: 'Work',
  data() {
    return {
      showProject: 3,
      isMore: true,
    };
  },
  methods: {
    showMoreProject() {
      this.showProject = this.showProject + 3;
      if (this.showProject >= useProjects().value.length) {
        this.isMore = false;
      }
    },
  },
  mounted() {
    useHeaderDark().value = true;
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';
</style>