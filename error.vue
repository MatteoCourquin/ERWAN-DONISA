<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen gap-10 bg-black">
    <div class="text-center text-white"> 
      <h1 class="text-3xl">404</h1>
      <p>{{ language == "FRA" ? "La page que vous cherchez n'existe pas."
        : "The page you are looking for does not exist." }}.</p>
    </div>
    <BaseButton @click="$router.push('/')" size='small' hover="white" color="red">{{ language == 'FRA' ?
      "Retourner à l'accueil"
      :
      "Go back Home" }}</BaseButton>
  </div>
</template>

<script setup>
const language = useLanguage();
</script>