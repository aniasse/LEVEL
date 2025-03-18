<script lang="ts" setup>
import { ProductsOrderByEnum } from '#woo';
const { siteName, description, shortDescription, siteImage } = useAppConfig();

const { data } = await useAsyncGql('getProductCategories', { first: 6 });
const productCategories = data.value?.productCategories?.nodes || [];

const { data: productData } = await useAsyncGql('getProducts', { first: 5, orderby: ProductsOrderByEnum.POPULARITY });
const popularProducts = productData.value.products?.nodes || [];

useSeoMeta({
  title: `LEVEL`,
  ogTitle: siteName,
  description: description,
  ogDescription: shortDescription,
  ogImage: siteImage,
  twitterCard: `summary_large_image`,
});
</script>

<template>
  <main>
    <HeroBanner />

    <section class="container my-16">
      <div class="flex items-end justify-between">
        <h2 class="text-2xl font-bold md:text-3xl animate-fade-in-up">{{ $t('messages.shop.shopByCategory') }}</h2>
        <NuxtLink class="text-gold hover:underline" to="/categories">{{ $t('messages.general.viewAll') }}</NuxtLink>
      </div>
      <div class="grid justify-center grid-cols-2 gap-6 mt-8 md:grid-cols-3 lg:grid-cols-6">
        <CategoryCard v-for="(category, i) in productCategories" :key="i" class="w-full animate-fade-in-up" :node="category" />
      </div>
    </section>

    <section class="container grid gap-6 my-24 md:grid-cols-2 lg:grid-cols-4">
      <div class="flex items-center gap-8 p-8 bg-white rounded-lg shadow-md animate-fade-in-up">
        <img src="/icons/box.svg" width="60" height="60" alt="Free Shipping" loading="lazy" />
        <div>
          <h3 class="text-xl font-semibold">Livraison Gratuite</h3>
          <p class="text-sm">Livraison gratuite pour les commandes supérieures à 50 milles</p>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 bg-white rounded-lg shadow-md animate-fade-in-up delay-200">
        <img src="/icons/moneyback.svg" width="60" height="60" alt="Money Back" loading="lazy" />
        <div>
          <h3 class="text-xl font-semibold">Tranquillité d'Esprit</h3>
          <p class="text-sm">Garantie de remboursement sous 30 jours</p>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 bg-white rounded-lg shadow-md animate-fade-in-up delay-400">
        <img src="/icons/secure.svg" width="60" height="60" alt="Secure Payment" loading="lazy" />
        <div>
          <h3 class="text-xl font-semibold">Paiement 100% Sécurisé</h3>
          <p class="text-sm">Vos paiements sont sécurisés avec nous.</p>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 bg-white rounded-lg shadow-md animate-fade-in-up delay-600">
        <img src="/icons/support.svg" width="60" height="60" alt="Support 24/7" loading="lazy" />
        <div>
          <h3 class="text-xl font-semibold">Support 24/7</h3>
          <p class="text-sm">Support en ligne 24/7</p>
        </div>
      </div>
    </section>

    <section class="container my-16" v-if="popularProducts">
      <div class="flex items-end justify-between">
        <h2 class="text-2xl font-bold md:text-3xl animate-fade-in-up">{{ $t('messages.shop.popularProducts') }}</h2>
        <NuxtLink class="text-gold hover:underline" to="/products">{{ $t('messages.general.viewAll') }}</NuxtLink>
      </div>
      <ProductRow :products="popularProducts" class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8" />
    </section>

    <section class="container my-16">
      <h2 class="text-2xl font-bold md:text-3xl text-center animate-fade-in-up">Ce que disent nos clients</h2>
      <div class="grid justify-center grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="p-6 bg-white rounded-lg shadow-md animate-fade-in-up">
          <p class="italic text-gray-600">"J'adore les vêtements de LEVEL ! La qualité est excellente et les modèles sont très élégants."</p>
          <p class="mt-4 font-semibold text-gold">- Aïssatou D.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-md animate-fade-in-up delay-200">
          <p class="italic text-gray-600">"Le service client est incroyable. Ils ont répondu à toutes mes questions rapidement et avec gentillesse."</p>
          <p class="mt-4 font-semibold text-gold">- Fatou B.</p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-md animate-fade-in-up delay-400">
          <p class="italic text-gray-600">"La livraison a été très rapide et les vêtements sont encore plus beaux en vrai !"</p>
          <p class="mt-4 font-semibold text-gold">- Mariama S.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-600 {
  animation-delay: 0.6s;
}

.text-gold {
  color: #CD7F32;
}

.hover\:underline:hover {
  text-decoration: underline;
}
</style>

