<template>
  <figure
    class=" bg-white shadow-md animate-fade-in-up relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4"
  >
  <blockquote class="italic text-gray-600 bg-white mt-2 text-sm">
    {{ props.body }}
  </blockquote>
    <div class="flex flex-row items-center bg-white gap-2">
      <!-- <img
        class="rounded-full"
        width="32"
        height="32"
        alt=""
        :src="props.img"
      /> -->
      <div class="flex flex-col">
        <h3 class=" mt-4 font-semi bold text-gold text-sm bg-white font-medium dark:text-white">
          - {{ props.name }}.
        </h3>
      </div>
    </div>
  </figure>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
  body: string
}>()
</script>
