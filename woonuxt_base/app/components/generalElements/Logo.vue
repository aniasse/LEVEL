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
      <!-- {{ siteName }} -->
      <span class="magic-text">{{ siteName }}</span>
    </div>
  </NuxtLink>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
.logo-text {
  font-family: 'Montserrat', sans-serif; /* Exemple de police Google Fonts */
  color: #7B241C; /* Rouge bordeaux */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Effet d'ombre */
  letter-spacing: 1px; /* Espacement des lettres */
}

</style>
