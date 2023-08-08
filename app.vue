<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
const { $client } = useNuxtApp()
const language = useLanguage();
let projects = [];

const fetchData = async () => {
  const data = await $client.getEntries({ content_type: 'project' });
  projects = data.items.map((item) => {
    const isEnglish = language.value === "ENG";
    return {
      title: item.fields.title,
      description: isEnglish ? item.fields.descriptionEnglish : item.fields.descriptionFrench,
      image: item.fields.coverImage.fields.file.url,
      images: item.fields.projectImages.map((image) => {
        return image.fields.file.url
      }),
    };
  });
  useProjects().value = projects;
};

fetchData();

watch(() => language.value, () => {
  fetchData();
});
</script>