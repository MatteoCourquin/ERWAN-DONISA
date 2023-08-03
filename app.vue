<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useNuxtApp } from "nuxt/app";
const { $client } = useNuxtApp()
const data = await $client.getEntries({
  content_type: 'project',
});
</script>