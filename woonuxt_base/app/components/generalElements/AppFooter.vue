<script setup lang="ts">
const { wishlistLink } = useAuth();
</script>

<template>
  <footer class="bg-white text-bordeaux order-last">
    <div class="container flex flex-wrap justify-between gap-12 my-12 md:gap-24">
      <!-- Logo et Description -->
      <div class="mr-auto mb-6 md:mb-0">
        <Logo />
        <WebsiteShortDescription class="mt-4" />
        <LangSwitcher class="mt-4" />
      </div>

      <!-- Informations Utiles -->
      <div class="w-full md:w-1/4 lg:w-auto mb-6 md:mb-0">
        <div class="mb-4 font-semibold">Informations</div>
        <div class="text-sm space-y-2">
          <a class="block hover:underline" href="https:levelstore.co" target="_blank">À propos</a>
          <a class="block hover:underline" href="https:levelstore.com" rel="noreferrer" target="_blank">FAQ</a>
        </div>
      </div>

      <!-- Produits -->
      <div class="w-full md:w-1/4 lg:w-auto mb-6 md:mb-0">
        <div class="mb-4 font-semibold">Produits</div>
        <div class="text-sm space-y-2">
          <NuxtLink to="/products" class="block hover:underline">Nouveautés</NuxtLink>
          <NuxtLink to="/products?filter=sale[true]" class="block hover:underline">En solde</NuxtLink>
          <NuxtLink to="/products?orderby=rating&order=ASC&filter=rating[1]" class="block hover:underline">Meilleures notes</NuxtLink>
        </div>
      </div>

      <!-- Service Client -->
      <div class="w-full md:w-1/4 lg:w-auto">
        <div class="mb-4 font-semibold">Service Client</div>
        <div class="text-sm space-y-2">
          <NuxtLink to="/contact" class="block hover:underline">Nous contacter</NuxtLink>
          <a class="block hover:underline" href="/">Livraison et retours</a>
          <a class="block hover:underline" href="/">Politique de confidentialité</a>
        </div>
      </div>
    </div>

    <!-- Droits d'Auteur et Réseaux Sociaux -->
    <div class="container border-t flex items-center justify-between py-4">
      <div class="copywrite text-xs text-center">
        <p>&copy; 2025 LEVEL. Tous droits réservés.</p>
        <!-- <p>
          <a href="https://levelstore.com" title="LEVEL">@ 2025 LEVEL tous droits réservés</a> - par
          <a href="https://scottyzen.com" title="Adama Niasse - Développeur Web" target="_blank">Lamyakoun</a>
        </p> -->
      </div>
      <div class="flex space-x-4">
        <a href="#" title="Facebook">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" class="w-6 h-6 hover:opacity-75" />
        </a>
        <a href="#" title="Instagram">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Instagram.svg" alt="Instagram" class="w-6 h-6 hover:opacity-75" />
        </a>
        <a href="#" title="Tik Tok">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tiktok_icon.svg" alt="Twitter" class="w-6 h-6 hover:opacity-75" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
.text-bordeaux {
  color: #7B241C;
}

a {
  @apply hover:underline;
}

.space-y-2 > * + * {
  margin-top: 0.5rem;
}

.hover\:opacity-75:hover {
  opacity: 0.75;
}
</style>
