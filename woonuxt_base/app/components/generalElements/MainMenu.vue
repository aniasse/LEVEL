<script setup lang="ts">
const { wishlistLink } = useAuth();
</script>

<template>
 <nav>
  <NuxtLink to="/" class="flex items-center text-gray-800 hover:text-gold transition-colors duration-300">
    <Icon name="heroicons:home" size="20" class="mr-2" />
    {{ $t('messages.general.home') }}
  </NuxtLink>

  <NuxtLink to="/products" class="flex items-center text-gray-800 hover:text-gold transition-colors duration-300">
    <Icon name="heroicons:shopping-bag" size="20" class="mr-2" />
    {{ $t('messages.general.allProducts') }}
  </NuxtLink>

  <NuxtLink to="/categories" class="flex items-center text-gray-800 hover:text-gold transition-colors duration-300">
    <Icon name="heroicons:tag" size="20" class="mr-2" />
    {{ $t('messages.shop.category', 2) }}
  </NuxtLink>

  <NuxtLink to="/contact" class="flex items-center text-gray-800 hover:text-gold transition-colors duration-300">
    <Icon name="heroicons:phone" size="20" class="mr-2" />
    {{ $t('messages.general.contact') }}
  </NuxtLink>

  <NuxtLink class="lg:hidden flex items-center text-gray-800 hover:text-gold transition-colors duration-300" :to="wishlistLink" :prefetch="false">
    <Icon name="heroicons:heart" size="20" class="mr-2" />
    Favoris
  </NuxtLink>

  <NuxtLink class="lg:hidden flex items-center text-gray-800 hover:text-gold transition-colors duration-300" to="/my-account" :prefetch="false">
    <Icon name="heroicons:user-circle" size="20" class="mr-2" />
    Mon Compte
  </NuxtLink>
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
