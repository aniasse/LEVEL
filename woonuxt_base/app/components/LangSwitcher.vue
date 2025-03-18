<script setup>
const { locales, locale, setLocaleCookie } = useI18n();

// Watcher pour détecter les changements de langue
watch(locale, (newLocale) => {
  if (newLocale) {
    // Recharger la page après avoir défini la nouvelle langue
    window.location.reload();
    setLocaleCookie(newLocale);
  }
});
</script>

<template>
  <select
    id="language-switcher"
    v-model="locale"
    aria-label="Language switcher"
    class="bg-white"
  >
    <option
      v-for="locale in locales"
      :key="locale.code"
      :value="locale.code"
      v-html="locale.name"
    />
  </select>
</template>
