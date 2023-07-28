<template>
  <div>
    <section
      class="px-paddingMain z-[200] sticky bottom-0 pt-44 pb-16 rounded-b-radiusMain bg-white text-black flex flex-col items-center text-center">
      <h1>My work</h1>
      <button @click="scroll" class="flex w-fit items-center gap-2 link link_black link_underline">
        <Arrow :isDark="true" orientation="bottom" />
        Scroll
      </button>
    </section>
    <CardRecentWork class="anim-curtain-section sticky bottom-0" v-for="(project, index) in projects" :key="index"
      :style="{ zIndex: 99 - index }" :title="project.title" :description="project.description" :link="project.link"
      :urlImage="project.urlImage" :showDescription="false" />
  </div>
</template>

<script>
import { gsap } from 'gsap';


export default {
  name: 'Work',
  data() {
    return {
      projects: [
        {
          title: 'Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nulla facilisi. Sed euismod, nunc vel aliquam aliquet, nisl nunc aliquet nunc, quis aliquam nunc nunc nec nunc.',
          link: '/',
          urlImage: 'image1.jpg'
        },
        {
          title: 'Project 2',
          description: 'Delectus odio sed nesciunt eveniet placeat nobis corrupti aliquam blanditiis assumenda animi architecto illum ipsa.',
          link: '/',
          urlImage: 'image2.jpg'
        },
        {
          title: 'Project 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus odio sed nesciunt eveniet placeat nobis corrupti aliquam blanditiis assumenda animi architecto illum ipsa, saepe, ad nemo modi atque accusamus debitis, dolorum autem aspernatur! Neque, mollitia fugiat nostrum veritatis aspernatur exercitationem.',
          link: '/',
          urlImage: 'image3.jpg'
        },
        {
          title: 'Project 4',
          description: 'Consectetur adipisicing elit. Delectus odio sed nesciunt eveniet placeat nobis corrupti aliquam blanditiis assumenda animi architecto illum ipsa, saepe, ad nemo modi atque accusamus debitis, dolorum autem aspernatur! Neque, mollitia fugiat nostrum veritatis aspernatur exercitationem.',
          link: '/',
          urlImage: 'image4.jpg'
        },
        {
          title: 'Project 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing corrupti aliquam blanditiis assumenda animi architecto illum ipsa, saepe, ad nemo modi atque accusamus debitis, dolorum autem aspernatur! Neque, mollitia fugiat nostrum veritatis aspernatur exercitationem.',
          link: '/',
          urlImage: 'image5.jpg'
        },
        {
          title: 'Project 6',
          description: 'Delectus odio sed nesciunt eveniet placeat nobis corrupti aliquam blanditiis assumenda animi architecto illum ipsa, saepe, ad nemo modi atque accusamus debitis, dolorum autem aspernatur! Neque, mollitia fugiat nostrum veritatis aspernatur exercitationem. Nesciunt eveniet placeat nobis corrupti aliquam blanditiis assumenda animi architecto illum ipsa, saepe, ad nemo modi atque accusamus debitis, dolorum autem aspernatur! Neque, mollitia fugiat nostrum veritatis aspernatur exercitationem.',
          link: '/',
          urlImage: 'image6.jpg'
        },
      ]
    };
  },
  methods: {
    animOpacity() {
      gsap.utils.toArray('.anim-curtain-section').forEach((el, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
          },
        });
        tl.to(el, { position: 'sticky' });
      });
    }
  },
  mounted() {
    useHeaderDark().value = true;
    this.animOpacity();
  },
}

</script>

<style scoped lang='scss'></style>