<template>
  <div
    :style="{
      '--size': size,
      '--duration': duration,
      '--anchor': anchor,
      '--border-width': borderWidth,
      '--color-from': colorFrom,
      '--color-to': colorTo,
      '--delay': `-${delay}s`,
    }"
    class="absolute inset-[0] z-10 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
  />
</template>

<script lang="ts">
  export interface BorderBeamProps {
    class?: string;
    size?: number;
    duration?: number;
    borderWidth?: number;
    anchor?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
  }
</script>

<script lang="ts" setup>
  withDefaults(defineProps<BorderBeamProps>(), {
    size: 200,
    duration: 15,
    anchor: 90,
    borderWidth: 1.5,
    colorFrom: "#CD7F32",
    colorTo: "#fff1",
    delay: 0,
  });
</script>
