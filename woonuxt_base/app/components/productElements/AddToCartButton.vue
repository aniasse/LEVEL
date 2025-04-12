<script setup>
const { cart } = useCart();
const props = defineProps({
  disabled: { type: Boolean, default: false },
});
const isLoading = ref(false);
const { t } = useI18n();
const addToCartButtonText = computed(() => (isLoading.value ? t('messages.shop.adding') : t('messages.shop.addToCart')));

// stop loading when cart is updated
watch(cart, (val) => {
  isLoading.value = false;
});
</script>

<template>
  <button
    type="submit"
    class="rounded-lg flex font-bold back text-white text-center min-w-[150px] p-2.5 gap-4 items-center justify-center focus:outline-none"
    :class="{ disabled: disabled }"
    :disabled="disabled"
    @click="isLoading = true">
    <span>{{ addToCartButtonText }}</span>
    <LoadingIcon v-if="isLoading" stroke="4" size="12" color="#CD7F32" />
  </button>
</template>

<style lang="postcss" scoped>
.back{
  background-color:#CD7F32 ;
}
button {
  outline: none !important;
  transition: all 150ms ease-in;
}

button.disabled {
  @apply cursor-not-allowed bg-gray-400;
}
</style>
