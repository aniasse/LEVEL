<script setup lang="ts">
const { siteName } = useAppConfig();
const runtimeConfig = useRuntimeConfig();
const img = useImage();

const logoUrl = runtimeConfig?.public?.LOGO ? img(runtimeConfig?.public?.LOGO) : null;
const faviconUrl = '/logo4.png';
</script>

<template>
  <NuxtLink to="/" class="inline-flex items-center gap-2">
    <img v-if="logoUrl" :src="logoUrl" alt="Logo" class="object-contain h-10" />
    <div v-else class="flex items-center gap-4 text-lg font-bold logo-text font-montserrat magic-text">
      <span class="magic-text">{{ siteName }}</span>
    </div>
  </NuxtLink>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
.logo-text {
  font-family: 'Merriweather', serif; /* Exemple de police Google Fonts */
}
.bg-center-black {
  background: linear-gradient(to right, transparent 0%, transparent 5%, black 20%, black 80%, transparent 96%, transparent 99%);
  padding: 0.1rem 3rem; /* Ajustez selon vos besoins */
  border-radius: 1px; /* Optionnel : pour des coins arrondis */
  width: fit-content; /* Ajuste la largeur pour contenir le texte */
}

</style>
