<template>
  <div id="page-index">
    <Hero v-if="isBackground" />
    <section
      class="anim-curtain-section section-slider rounded-b-radiusMain h-[200vh] bg-white w-full grid grid-rows-2 z-[100] !text-black">
      <div ref="grapScroll" @mousedown="startScrolling" class="cursor-pointer p-4 absolute z-10 -top-14 left-1/2 -translate-x-1/2">
        <div
          class="h-[6px] w-24 rounded-full bg-slate-200">
        </div>
      </div>
      <p
        class="px-paddingMain flex justify-center h-screen items-center text-center flex-col overflow-hidden text-3xl sm:text-4xl lg:text-5xl lg:w-3/4 mx-auto">
        {{ language == 'FRA' ?
          "Mon job, donner vie à votre marque à travers chaque création. Pour faire de vous la référence de votre domaine."
          :
          "My job is to bring your brand to life with every creation.To make you the benchmark in your field." }}
      </p>
      <Slider />
    </section>
    <div v-for="(project, index) in projects" :key="index" class="anim-curtain-section" :style="{ zIndex: 99 - index }">
      <CardProject v-if="index < 3" :title="project.title" :description="project.description"
        :urlImage="project.coverImage" />
    </div>
    <section
      class="anim-curtain-section w-full view-more z-10 rounded-b-radiusMain p-paddingMain bg-white flex items-center justify-center flex-col text-center">
      <h3 class="text-black mb-10">
        {{ language == 'FRA' ?
          "EN SAVOIR PLUS"
          :
          "CHECK THE OTHERS" }}
      </h3>
      <BaseButton @click="$router.push('/work')" size='medium' hover="red" color="black">{{ language == 'FRA' ?
        "Plus"
        :
        "More" }}</BaseButton>
    </section>
  </div>
</template>

<script setup>
const projects = useProjects();
const language = useLanguage();
</script>
<script>
export default {
  name: 'index',
  layout: 'default',
  data() {
    return {
      isBackground: true,
      scrollSpeed: 1.3,
    };
  },
  methods: {
    checkedScroll() {
      const scrolledDistance = window.scrollY || window.pageYOffset;
      this.isBackground = scrolledDistance <= window.innerHeight * 1.2
    },
    startScrolling(event) {
      document.body.style.userSelect = 'none';
      document.body.style.pointerEvents = 'none';

      let lastY = event.clientY;

      const onMouseMove = (e) => {
        const deltaY = lastY - e.clientY;
        window.scrollTo(0, window.scrollY + deltaY * this.scrollSpeed);
        lastY = e.clientY;
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.body.style.userSelect = '';
        document.body.style.pointerEvents = '';
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  },
  mounted() {
    useHeaderDark().value = false;
    window.addEventListener('scroll', this.checkedScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkedScroll)
  },
};
</script>

<style lang='scss'>
@import '@/scss/main.scss';

#page-index {
  padding-top: 100vh;
}

.anim-curtain-section {
  position: sticky;
  bottom: 0;
}

.section-slider::after {
  content: '';
  position: absolute;
  top: -50px;
  height: 50px;
  width: 100vw;
  border-radius: $radius-main $radius-main 0 0;
  background: $color-white;
}

.view-more::after {
  content: '';
  position: absolute;
  top: -25px;
  left: 0;
  width: 100%;
  height: 25px;
  background-color: $color-white;
  z-index: 1;
}
</style>
