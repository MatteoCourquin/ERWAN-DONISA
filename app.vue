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

useProjects().value = data.items.map((item) => {
  return {
    title: item.fields.title,
    description: item.fields.description,
    image: item.fields.coverImage.fields.file.url,
    images: item.fields.projectImages.map((image) => {
      return image.fields.file.url
    }),
  }
})

</script>