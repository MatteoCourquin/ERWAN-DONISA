<template>
  <div>
    <section class="pt-44 pb-16 sticky top-0 text-white w-screen flex flex-col items-center text-center">
      <h1>LET’S WORK<br> TOGETHER</h1>
      <ButtonScroll :isDark="false" orientation="bottom" />
    </section>
    <section class="bg-white z-[300] sticky w-screen py-[10vh] px-paddingMain rounded-radiusMain text-black">
      <h2 class="pb-5">Contact</h2>
      <p>If you’re looking for any information or general questions use my details below or the contact form.</p>

      <h4 class="label-title text-xs !pb-0">Email</h4>
      <a href="mailto:donisaerwan@gmail.com"
        class="link link_black link_underline !lowercase !text-sm">donisaerwan@gmail.com</a>

      <h4 class="label-title text-xs !pb-0">Phone</h4>
      <a href="tel:0658415260" class="link link_black link_underline !text-sm">+33 6 58 41 52 60</a>

      <h4 class="label-title">How can i help you ?</h4>
      <div class="wrapper-input">
        <!-- checkbox -->
        <div class="flex gap-2">
          <input type="checkbox" id="branding" name="branding" value="Web Design">
          <label for="branding">Branding</label>
        </div>
        <div class="flex gap-2">
          <input type="checkbox" id="product-design" name="product-design" value="Web Design">
          <label for="product-design">Product Design</label>
        </div>
        <div class="flex gap-2">
          <input type="checkbox" id="illustration" name="illustration" value="Web Design">
          <label for="illustration">Illustration</label>
        </div>
        <div class="flex gap-2">
          <input type="checkbox" id="web-design" name="web-design" value="Web Design">
          <label for="web-design">Web Design</label>
        </div>
      </div>

      <h4 class="label-title">What's your budget ?</h4>
      <!-- <label for='budget'></label>
      <input type='range' id='budget' name='budget'/> -->
      <div class="wrapper-input">
        <select name="services" id="services">
          <option class="!text-[#9BA3AF]" value="default">Select from dropdown</option>
          <option value="Web Design">Web Design</option>
          <option value="Web Development">Web Development</option>
          <option value="branding">Branding</option>
        </select>
      </div>
      <div class="wrapper-input">
        <label for="description">Description of the project (optional)</label>
        <textarea name="description" id="description" cols="30" rows="10" placeholder="Tell me everything..."></textarea>
      </div>

      <h4 class="label-title">Extra Services</h4>
      <div class="wrapper-input">
        <select name="services" id="services">
          <option class="!text-[#9BA3AF]" value="default">Select from dropdown</option>
          <option value="Web Design">Web Design</option>
          <option value="Web Development">Web Development</option>
          <option value="branding">Branding</option>
        </select>
      </div>

      <h4 class="label-title">Personal Details</h4>
      <div class="wrapper-input">
        <label for="name">Full Name</label>
        <input type="text" name="name" id="name" placeholder="John Smith">
      </div>
      <div class="wrapper-input">
        <label for="mail">Email Adresse</label>
        <input type="email" name="mail" id="mail" placeholder="john.smith@example.com">
      </div>
      <div class="wrapper-input">
        <label for="work">How did you find my work ?</label>
        <input type="text" name="work" id="work" placeholder="Lorem, ipsum dolor...">
      </div>
      <!-- <div class="wrapper-input">
        <label for="phone">Phone</label>
        <input type="tel" name="phone" id="phone" placeholder="06 00 00 00 00">
      </div> -->

      <BaseButton class=" my-5 md:!w-fit !w-full" @click="console.log('submit')" size='medium' color="red">Submit</BaseButton>

      <p class="pb-4">Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
        aliquet odio
        mattis.</p>
      <p>Class aptent <a class="text-[#6FCAD0]" target="_blank" href="">taciti sociosqu</a> ad litora <a
          class="text-[#6FCAD0]" target="_blank" href="">torquent</a> per conubia nostra, per inceptos himenaeos.</p>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  data() {
    return {};
  },
  methods: {},
  mounted() {
    useHeaderDark().value = false;
  },
}

</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.wrapper-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 2rem;
}

.label-title {
  font-family: $font-termina-500;
  padding-top: 50px;
  padding-bottom: 30px;
  font-size: 20px;
  white-space: nowrap;
  text-transform: initial !important;
}
</style>