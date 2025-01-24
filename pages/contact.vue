<template>
  <div>
    <section class="pt-44 pb-16 z-10 sticky top-0 text-white w-screen flex flex-col items-center text-center bg-black">
      <h1>{{ language == 'FRA' ?
        "COLLABORONS ENSEMBLE"
        :
        "LET’S WORK TOGETHER" }}</h1>
      <ButtonScroll :isDark="false" orientation="bottom" />
    </section>
    <section class="bg-white z-[300] sticky w-screen py-[10vh] px-paddingMain rounded-radiusMain text-black">
      <form ref="form" class="w-full">
        <div class="md:flex w-full gap-10">
          <div class="wrapper-input">
            <label for="first-name" class="label-title">{{ language == 'FRA' ?
              "Prénom"
              :
              "First name" }} <span v-if="isError.firstName" class="text-red-500">*</span></label>
              <input required ref="firstName" type="text" name="first-name" id="first-name" placeholder="John">
              <p class="text-red-500 text-xs" v-if="isError.name">{{ language == 'FRA' ? "Prénom requis" : "First name is required" }}</p>
          </div>
          <div class="wrapper-input">
          <label for="last-name" class="label-title">{{ language == 'FRA' ?
            "Nom"
            :
            "Last name" }}</label>
              <input required ref="lastName" type="text" name="last-name" id="last-name" placeholder="Doe">
          </div>
        </div>
        <div class="wrapper-input">
          <label for="description" class="label-title">{{ language == 'FRA' ?
          "Comment puis-je vous aider ?"
          :
          "How can i help you ?" }} <span v-if="isError.description" class="text-red-500">*</span></label>
          <textarea ref="description" name="description" id="description" cols="30"
            :placeholder="language === 'FRA' ? 'Votre message...' : 'Your message...'"></textarea>
          <p class="text-red-500 text-xs" v-if="isError.description">{{ language == 'FRA' ? "Une description de votre projet est requise" : "A description of your project is required" }}</p>
        </div>
        <div class="md:flex w-full gap-10">
          <div class="wrapper-input">
            <label for="find" class="label-title">{{ language == 'FRA' ?
              "Où m’avez vous découvert ?"
              :
              "Where did you find me ?" }}</label>
              <input required ref="find" type="text" name="find" id="find" :placeholder="language === 'FRA' ? 'Sur...' : 'On...'">
          </div>
          <div class="wrapper-input">
          <label for="mail" class="label-title">{{ language == 'FRA' ?
            "Votre e-mail est ?"
            :
            "What’s your e-mail ?" }} <span v-if="isError.email" class="text-red-500">*</span></label>
              <input required ref="email" type="email" name="mail" id="mail" placeholder="johndoe@gmail.com">
              <p class="text-red-500 text-xs" v-if="isError.email">{{ language == 'FRA' ? "Email requis" : "Email required" }}</p>
          </div>
        </div>
      </form>
      <BaseButton class="my-5 md:!w-fit !w-full" @click="submit" size='medium' hover="black" color="red">Submit
      </BaseButton>
    </section>
  </div>
</template>

<script setup>
const language = useLanguage();
</script>
<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'Contact',
  data() {
    return {
      isError: { description: false, firstName: false, email: false },
    };
  },
  methods: {
    submit() {

      const templateParams = {
        firstName: this.$refs.firstName.value,
        lastName: this.$refs.lastName.value,
        description: this.$refs.description.value,
        find: this.$refs.find.value,
        email: this.$refs.email.value,
      };

      !templateParams.description ? this.isError.description = true : this.isError.description = false
      !templateParams.firstName ? this.isError.firstName = true : this.isError.firstName = false
      !templateParams.email ? this.isError.email = true : this.isError.email = false

      if (templateParams.firstName && templateParams.email && templateParams.description) {
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
          .then((response) => {
            this.isError.firstName = false;
            this.isError.lastName = false;
            this.isError.email = false;
            this.$refs.form.reset();
          }, (err) => {
            throw new Error(err);
          });
      }
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
  margin-bottom: 4rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
}

.label-title {
  font-family: $font-archivo-regular;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 20px;
  white-space: nowrap;
  text-transform: initial !important;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
}
</style>
