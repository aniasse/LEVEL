<template>
  <PageSection
    class="!pt-0"
    column
  >
  <div class="relative mx-auto overflow-hidden">
    <div class="relative rounded-xl">
    <div class="w-full h-[6rem] mx-auto bordure absolute top-[-4rem] blur-[250px] opacity-20 z-[1]"></div>
        <BorderBeam :size="400" :duration="10" :delay="9" :border-width="4" />

    <NuxtImg
      width="1400"
      height="800"
      class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px] transition-transform duration-500 ease-in-out hover:scale-105 rounded-2xl border-gold border-4"
      src="/images/hero-7.png"
      alt="Hero image"
      loading="eager"
      sizes="sm:100vw md:1400px"
      fetchpriority="high"
      preload
      placeholder
      placeholder-class="blur-xl" />
    <div class="absolute inset-0 flex flex-col items-start justify-end p-6 pb-16 bg-gradient-to-l from-gray-700">
      <h1 class="text-3xl font-extrabold md:mb-4 md:text-4xl lg:text-5xl text-transparent animate-shimmer bg-clip-text via-white/80 via-50% to-transparent bg-no-repeat [background-position:0_0] [background-size:200px_100%] [transition:background-position_2s_cubic-bezier(.6,.6,0,1)_infinite] bg-gradient-to-r from-transparent">
  Nouvelle Collection
</h1>
      <h2 class="text-lg font-semibold md:mb-4 lg:text-2xl text-white animate-fade-in-up delay-200">Découvrez nos dernières tendances</h2>
      <div class="max-w-sm mb-8 text-sm font-light lg:max-w-md text-balance text-white animate-fade-in-up delay-400">
        <p>Notre nouvelle collection est arrivée. Explorez les dernières tendances et styles pour cette saison.</p>
      </div>
      <NuxtLink
        class="px-6 py-3 font-bold text-white bg-gold rounded-full hover:bg-gold-dark transition-colors duration-300 animate-bounce border-gold border-2"
        to="/products">
        Boutique<Icon
              name="i-heroicons-arrow-right"
              class="w-4 h-4 ml-1"
            />
      </NuxtLink>
      <!-- <SectionBadge
            text="Votre boutique en ligne, clé en main"
            icon="i-material-symbols-key"
            href="https://nuxt.com/"
            shiny
          /> -->
    </div>
    </div>
  </div>
</PageSection>
</template>

<style>

  .text-gold {
    color: #CD7F32;
  }
  .text-white {
    color: #ffffff;
  }
  .bg-gold {
    background-color: #CD7F32;
  }
  .bg-gold-dark {
    background-color: #B57327;
  }
  .border-gold {
    border-color: #CD7F32;
  }
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
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  .animate-bounce {
    animation: bounce 2s infinite;
  }
</style>
