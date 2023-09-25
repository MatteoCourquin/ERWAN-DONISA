// import { createClient } from 'contentful';
import contentful from 'contentful';
const { createClient } = contentful;

export default defineNuxtPlugin(() => {
  return {
    provide: {
      client: createClient({
        space: import.meta.env.VITE_SPACE_ID,
        accessToken: import.meta.env.VITE_ACCESS_TOKEN
      })
    }
  };
});
