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

      <form ref="form">
        <h4 class="label-title">How can i help you ?</h4>
        <div class="wrapper-input">
          <!-- checkbox -->
          <div class="flex gap-2">
            <input ref="branding" type="checkbox" id="branding" name="branding" value="Branding">
            <label for="branding">Branding</label>
          </div>
          <div class="flex gap-2">
            <input ref="productDesign" type="checkbox" id="product-design" name="product-design" value="Product Design">
            <label for="product-design">Product Design</label>
          </div>
          <div class="flex gap-2">
            <input ref="illustration" type="checkbox" id="illustration" name="illustration" value="Illustration">
            <label for="illustration">Illustration</label>
          </div>
          <div class="flex gap-2">
            <input ref="webDesign" type="checkbox" id="web-design" name="web-design" value="Web Design">
            <label for="web-design">Web Design</label>
          </div>
        </div>
        <h4 class="label-title">What's your budget ?</h4>
        <!-- <div class="wrapper-input">
          <input ref="budget" type='range' id='budget' name='budget' />
        </div> -->
        <div class="wrapper-input">
          <select ref="budget" name="budget" id="services">
            <option class="!text-[#9BA3AF]" value="default">Select from dropdown</option>
            <option value="- 1 000">- 1 000</option>
            <option value="1 000 - 10 000">1 000 - 10 000</option>
            <option value="+ 10 000">+ 10 000</option>
          </select>
        </div>
        <div class="wrapper-input">
          <label for="description">Description of the project (optional)</label>
          <textarea ref="description" name="description" id="description" cols="30" rows="10"
            placeholder="Tell me everything..."></textarea>
        </div>
        <h4 class="label-title">Extra Services</h4>
        <div class="wrapper-input">
          <select ref="extraService" name="services" id="services">
            <option class="!text-[#9BA3AF]" value="default">Select from dropdown</option>
            <option value="Web Design">Web Design</option>
            <option value="Web Development">Web Development</option>
            <option value="branding">Branding</option>
          </select>
        </div>
        <h4 class="label-title">Personal Details</h4>
        <div class="wrapper-input">
          <label for="name">Full Name</label>
          <input ref="name" type="text" name="name" id="name" placeholder="John Smith">
        </div>
        <div class="wrapper-input">
          <label for="mail">Email Adresse</label>
          <input ref="email" type="email" name="mail" id="mail" placeholder="john.smith@example.com">
        </div>
        <div class="wrapper-input">
          <label for="work">How did you find my work ?</label>
          <input ref="work" type="text" name="work" id="work" placeholder="Lorem, ipsum dolor...">
        </div>
        <!-- <div class="wrapper-input">
          <label for="phone">Phone</label>
          <input type="tel" name="phone" id="phone" placeholder="06 00 00 00 00">
        </div> -->
      </form>

      <BaseButton class=" my-5 md:!w-fit !w-full" @click="submit" size='medium' color="red">Submit
      </BaseButton>

      <p class="pb-4">Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
        aliquet odio
        mattis.</p>
      <p>Class aptent <a class="text-[#6FCAD0]" target="_blank" href="">taciti sociosqu</a> ad litora <a
          class="text-[#6FCAD0]" target="_blank" href="">torquent</a> per conubia nostra, per inceptos himenaeos.</p>
    </section>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'Contact',
  data() {
    return {};
  },
  methods: {
    submit() {
      const typeOfProject = [];
      this.$refs.branding.checked && typeOfProject.push(this.$refs.branding.value)
      this.$refs.productDesign.checked && typeOfProject.push(this.$refs.productDesign.value)
      this.$refs.illustration.checked && typeOfProject.push(this.$refs.illustration.value)
      this.$refs.webDesign.checked && typeOfProject.push(this.$refs.webDesign.value)

      const templateParams = {
        typeOfProject: typeOfProject.join(', '),
        budget: this.$refs.budget.value,
        description: this.$refs.description.value,
        extraService: this.$refs.extraService.value,
        name: this.$refs.name.value,
        email: this.$refs.email.value,
        work: this.$refs.work.value,
      };

      emailjs.send('service_2axnhxs', 'template_omcrnoe', templateParams, 'vCwrcXR-qeUW1Qo4c')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.$refs.form.reset();

        }, (err) => {
          console.log('FAILED...', err);
        });
    }
  },
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
