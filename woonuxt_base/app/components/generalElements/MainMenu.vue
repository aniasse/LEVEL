<script setup lang="ts">
const { wishlistLink } = useAuth();
</script>

<template>
  <nav>
    <NuxtLink to="/" class="text-gray-800 hover:text-gold transition-colors duration-300">{{ $t('messages.general.home') }}</NuxtLink>
    <NuxtLink to="/products" class="text-gray-800 hover:text-gold transition-colors duration-300">{{ $t('messages.general.allProducts') }}</NuxtLink>
    <NuxtLink to="/categories" class="text-gray-800 hover:text-gold transition-colors duration-300">{{ $t('messages.shop.category', 2) }}</NuxtLink>
    <NuxtLink to="/contact" class="text-gray-800 hover:text-gold transition-colors duration-300">{{ $t('messages.general.contact') }}</NuxtLink>
    <NuxtLink class="lg:hidden text-gray-800 hover:text-gold transition-colors duration-300" :to="wishlistLink" :prefetch="false">Favoris</NuxtLink>
    <NuxtLink class="lg:hidden text-gray-800 hover:text-gold transition-colors duration-300" to="/my-account" :prefetch="false">Mon Compte</NuxtLink>
  </nav>
</template>

<style>
  .text-gold {
    color: #CD7F32;
  }
  .hover\:text-gold:hover {
    color: #CD7F32;
  }
</style>
