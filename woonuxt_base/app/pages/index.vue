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

const testimonials = [
  {
    name: "Aïssatou D.",
    body: "Les hijabs de LEVEL sont parfaits pour les occasions spéciales. J'ai reçu beaucoup de compliments quand je les porte.",
  },
  {
    name: "Khadidiatou N.",
    body: "Je porte mes hijabs de LEVEL presque tous les jours. Ils sont confortables et faciles à assortir avec différentes tenues.",
  },
  {
    name: "Fatou S.",
    body: "La qualité des tissus est vraiment impressionnante. Les hijabs sont légers et respirants, parfaits pour le climat ici.",
  },
  {
    name: "Aminata D.",
    body: "J'ai acheté plusieurs hijabs de LEVEL et je suis toujours satisfaite de la qualité et du style. Ils sont élégants et modernes.",
  },
  {
    name: "Coumba F.",
    body: "Le service client de LEVEL est excellent. Ils m'ont aidée à choisir le hijab parfait pour un événement important.",
  },
  {
    name: "Mariama M.",
    body: "Les hijabs de LEVEL sont non seulement beaux, mais aussi très bien faits. Ils durent longtemps et gardent leur éclat.",
  }
];
import { ref } from 'vue';

const showWarning = ref(true);

const continueToSite = () => {
  showWarning.value = false;
};

const firstTestimonialsRow = testimonials.slice(0, testimonials.length / 2)
const secondTestimonialsRow = testimonials.slice(testimonials.length / 2)
</script>

<template>
  <div>
    <section v-if="showWarning" class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8 z-50">
      <div class="max-w-lg">
        <h1 class="text-4xl font-bold text-primary mb-4">Site en Construction</h1>
        <p class="text-lg text-gray-600 mb-6">
          Cliquez pour continuer.
        </p>
        <div class="flex justify-center">
          <button @click="continueToSite" class="px-4 py-2 bg-gold text-white font-semibold rounded-lg shadow-md hover:bg-gold-dark transition-colors">
            Continuer
          </button>
        </div>
      </div>
    </section>
  </div>
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
  <img src="/icons/box.svg" width="60" height="60" alt="Free Shipping" loading="lazy" class="icon-red-wine" />
  <div>
    <h3 class="text-xl font-semibold">Livraison Gratuite</h3>
    <p class="text-sm">Livraison gratuite pour les commandes supérieures à 50 milles</p>
  </div>
</div>
<div class="flex items-center gap-8 p-8 bg-white rounded-lg shadow-md animate-fade-in-up delay-200">
  <img src="/icons/moneyback.svg" width="60" height="60" alt="Money Back" loading="lazy" class="icon-red-wine" />
  <div>
    <h3 class="text-xl font-semibold">Tranquillité d'Esprit</h3>
    <p class="text-sm">Garantie de remboursement sous 30 jours</p>
  </div>
</div>
<div class="flex items-center gap-8 p-8 bg-white rounded-lg shadow-md animate-fade-in-up delay-400">
  <img src="/icons/secure.svg" width="60" height="60" alt="Secure Payment" loading="lazy" class="icon-red-wine" />
  <div>
    <h3 class="text-xl font-semibold">Paiement 100% Sécurisé</h3>
    <p class="text-sm">Vos paiements sont sécurisés avec nous.</p>
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
      <div class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee pause-on-hover>
          <TestimonialCard
            v-for="item in firstTestimonialsRow"
            :key="item.name"
            v-bind="item"
          />
        </Marquee>
        <Marquee
          pause-on-hover
          reverse
        >
          <TestimonialCard
            v-for="item in secondTestimonialsRow"
            :key="item.name"
            v-bind="item"
          />
        </Marquee>
        <div class="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-gray-100" />
        <div class="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-gray-100" />
      </div>
    </section>
  </main>
</template>

<style scoped>
html {
  scroll-behavior: smooth
}
.text-primary {
  color: #7B241C; /* Rouge bordeaux */
}

.bg-gold {
  background-color: #CD7F32; /* Jaune doré */
}

.bg-gold-dark:hover {
  background-color: #b5651d; /* Jaune doré foncé pour l'état hover */
}
.icon-red-wine {
  filter: invert(58%) sepia(71%) saturate(4564%) hue-rotate(325deg) brightness(90%) contrast(45%);}
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

