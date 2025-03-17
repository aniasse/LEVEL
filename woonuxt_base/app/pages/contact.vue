<template>
  <div class="container my-8">
    <h1 class="mb-8 text-4xl font-bold text-gold text-center">Contactez-nous</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="prose">
        <p>
          Vous pouvez nous joindre via le formulaire ci-contre, en utilisant les coordonnées ci-dessous, ou directement sur WhatsApp pour une réponse rapide.
        </p>
        <p class="mt-4">
          <strong>Adresse :</strong> Ouakam, Dakar, Sénégal
        </p>
        <p>
          <strong>Téléphone :</strong> +221 77 092 51 31
        </p>
        <p>
          <strong>Email :</strong> level.sn0806@gmail.com
        </p>
        <p class="mt-4">
          <a href="https://wa.me/221123456789" target="_blank" class="text-gold hover:underline flex items-center">
            <img src="/icons/WhatsApp.svg" alt="WhatsApp" class="w-6 h-6 mr-2" />
            Discutez avec nous sur WhatsApp
          </a>
        </p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="mb-4 text-2xl font-semibold text-gold">Formulaire de Contact</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-gray-700">Nom</label>
            <input type="text" id="name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-gold" required />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Email</label>
            <input type="email" id="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-gold" required />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-gray-700">Message</label>
            <textarea id="message" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-gold" rows="4" required></textarea>
          </div>
          <button type="submit" class="px-6 py-3 font-bold text-white bg-gold rounded-full hover:bg-gold-dark transition-colors duration-300">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-gold {
  color: #CD7F32;
}

.bg-gold {
  background-color: #CD7F32;
}

.bg-gold-dark {
  background-color: #B57327;
}

.focus\:ring-gold:focus {
  box-shadow: 0 0 0 3px rgba(205, 127, 50, 0.5);
}
</style>

<script setup>
function submitForm() {
  alert('Formulaire soumis avec succès !');
}
</script>
