import pkg from 'contentful';
const { createClient } = pkg;

export default defineNuxtPlugin(() => {
  return {
    provide: {
      client: createClient({
        space: 'cse6m1hgf7gu',
        accessToken: 'JpDWdG38G4U0BDSaarW_GX8-mqXc-Z3ab8byBrxmNWc'
      })
    }
  }
})