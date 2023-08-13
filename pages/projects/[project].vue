<template>
  <div id="page-project">
    <div v-for="(project, index) in projects" :key="index">
      <div
        v-if="project.title.replace(/\s+/g, '-').toLowerCase() === route.params.project.replace(/\s+/g, '-').toLowerCase()">
        <section
          :class="['hero-project text-center h-screen fixed top-0 z-0 w-screen justify-center items-center flex-col', isBackground ? 'flex' : 'invisible']"
          :style="{ '--background-image': `url('https:${project.image}')` }">
          <h1 class="z-10">{{ project.title }}</h1>
        </section>
        <section class="sticky bottom-0 bg-white z-10 rounded-radiusMain min-h-[200vh] overflow-hidden">
          <div class="py-[10vh] text-black text-center px-paddingMain">
            <h2 class="mb-10">{{ project.title }}</h2>
            <p>{{ project.description }}</p>
          </div>
          <div class="flex flex-col gap-5 px-paddingMain pb-[10vh]">
            <div class="rounded-lg" v-for="(image, index) in project.images" :key="index">
              <img class="h-full w-full rounded-lg object-cover" :src="`https:${image}`" alt="project image">
            </div>
          </div>
          <section
            class="next-project rounded-radiusMain text-center py-[10vh] flex flex-col justify-between items-center z-10 h-[50vh] w-screen"
            :style="{ '--background-image-next-project': `url('https:${nextProject.image}')` }">
            <div>
              <h3>Next Project</h3>
              <p>({{ nextProject.title }})</p>
            </div>
            <BaseButton ref="button" @mouseenter="active = true" @mouseleave="active = false"
              @click="$router.push(`/projects/${nextProject.title.replace(/\s+/g, '-').toLowerCase()}`)" size='medium'
              color="white">
              <svg :class="active ? 'hidden' : 'black'" height="40" viewBox="0 0 310 60" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="309.351" height="60" rx="30" fill="transparent" />
                <path
                  d="M184.061 31.0607C184.646 30.4749 184.646 29.5251 184.061 28.9393L174.515 19.3934C173.929 18.8076 172.979 18.8076 172.393 19.3934C171.808 19.9792 171.808 20.9289 172.393 21.5147L180.879 30L172.393 38.4853C171.808 39.0711 171.808 40.0208 172.393 40.6066C172.979 41.1924 173.929 41.1924 174.515 40.6066L184.061 31.0607ZM125 31.5L183 31.5L183 28.5L125 28.5L125 31.5Z"
                  fill="black" />
              </svg>
              <svg :class="!active ? 'hidden' : 'black'" height="40" viewBox="0 0 310 60" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="309.351" height="60" rx="30" fill="transparent" />
                <path
                  d="M184.061 31.0607C184.646 30.4749 184.646 29.5251 184.061 28.9393L174.515 19.3934C173.929 18.8076 172.979 18.8076 172.393 19.3934C171.808 19.9792 171.808 20.9289 172.393 21.5147L180.879 30L172.393 38.4853C171.808 39.0711 171.808 40.0208 172.393 40.6066C172.979 41.1924 173.929 41.1924 174.515 40.6066L184.061 31.0607ZM125 31.5L183 31.5L183 28.5L125 28.5L125 31.5Z"
                  fill="white" />
              </svg>
            </BaseButton>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const projects = useProjects();
const currentIndex = projects.value.findIndex((p) => p.title.replace(/\s+/g, '-').toLowerCase() === route.params.project.replace(/\s+/g, '-').toLowerCase());
const nextProject = currentIndex === projects.value.length - 1 ? projects.value[0] : projects.value[currentIndex + 1];
</script>

<script>
export default {
  name: '',
  data() {
    return {
      active: false,
      isBackground: true,
    };
  },
  methods: {
    checkedScroll() {
      const scrolledDistance = window.scrollY || window.pageYOffset;
      this.isBackground = scrolledDistance <= window.innerHeight * 1.2
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkedScroll)
    useHeaderDark().value = false;
  },
}
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

#page-project {
  padding-top: 100vh;
}

.gallery::after {
  content: '';
  display: none;

  @include respo-xs {
    display: block;
    flex-grow: 10;
  }
}

.next-project {
  background: var(--background-image-next-project) no-repeat center center;
  background-size: cover;
}

.hero-project {
  background: var(--background-image) no-repeat center center;
  background-size: cover;

  &::after {
    content: '';
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.4;
  }

  ;
}
</style>