<template>
  <div>
    <Lenis :options="options" root>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Lenis>
  </div>
</template>

<script setup>
const options = {
  duration: 1.5,
  orientation: "vertical",
  gestureOrientation: "vertical",
}

const fetchData = async ($client, language) => {
  try {
    const data = await $client.getEntries({ content_type: 'project' });
    const isEnglish = language.value === 'ENG';

    return data.items.map((item) => {
      return {
        title: item.fields.title,
        projectTypes: item.fields.types,
        description: isEnglish ? item.fields.descriptionEnglish : item.fields.descriptionFrench,
        coverImage: item.fields.coverImage.fields.file.url,
        imagesDesktop: item.fields.projectImagesDesktop.map((image) => image.fields.file.url),
        imagesMobile: item.fields.projectImagesMobile.map((image) => image.fields.file.url),
      };
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
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
