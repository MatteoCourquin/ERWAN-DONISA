<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

const fetchData = async ($client, language) => {
  const data = await $client.getEntries({ content_type: 'project' });
  const isEnglish = language.value === 'ENG';

  return data.items.map((item) => ({
    title: item.fields.title,
    description: isEnglish ? item.fields.descriptionEnglish : item.fields.descriptionFrench,
    image: item.fields.coverImage.fields.file.url,
    images: item.fields.projectImages.map((image) => image.fields.file.url),
  }));
};

const { $client } = useNuxtApp();
const language = useLanguage();
const projects = useProjects();

fetchData($client, language).then((data) => {
  projects.value = data;
});

watch(() => language.value, () => {
  fetchData($client, language).then((data) => {
    projects.value = data;
  });
});
</script>
