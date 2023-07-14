<template>
  <footer class="footer bg-black relative">
    <div class="flex grow justify-between gap-[20vw]">
      <div class="flex flex-col gap-5 w-full items-center sm:items-start relative max-w-2xl">
        <h4 class="text-center sm:text-left">We should<br>work together</h4>
        <button class="button button_medium button_red">Let's go</button>
        <NuxtLink class="self-end	link link_white" to="/">pick</NuxtLink>
      </div>
      <nav class="hidden sm:block">
        <ul class="flex flex-col text-right justify-center gap-5">
          <h4 class="text-right">Menu</h4>
          <li>
            <NuxtLink class="link link_white" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link link_white" to="/">About</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link link_white" to="/">Work</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link link_white" to="/">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex gap-14 flex-col sm:flex-row items-center">
      <div>
        <h6 class="text-center sm:text-left text-white !capitalize">Join me at</h6>
        <a href="mailto:donisaerwan@gmail.com"
          class="underline !lowercase !text-sm link link_white">donisaerwan@gmail.com</a>
      </div>
      <div>
        <h6 class="text-center sm:text-left text-white !capitalize">Or</h6>
        <a href="tel:0658415260" class="underline !text-sm link link_white">+33 6 58 41 52 60</a>
      </div>
    </div>
    <div class="w-full py-16 px-[10vw]">
      <div class="bg-white w-full h-[1px]"></div>
    </div>
    <div class="flex justify-between">
      <div>
        <h6 class="text-white !capitalize">Version</h6>
        <p class="text-sm text-white">2023 © Edition</p>
      </div>
      <div>
        <h6 class="text-white text-right !capitalize">Social media</h6>
        <a href="" class="hover:opacity-70">instagram</a>
        <a href="" class="hover:opacity-70">linkedin</a>
        <a href="" class="hover:opacity-70">behance</a>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {};
  },
  methods: {}
}

</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.footer {
  padding: $padding-main;

  &::after {
    content: '';
    position: absolute;
    background: $color-black;
    width: 100%;
    height: 25px;
    top: -25px;
    left: 0;
  }
}
</style>