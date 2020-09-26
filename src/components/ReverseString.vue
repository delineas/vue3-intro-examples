<template>
  <p>String: {{ myString }}</p>
  <p>Reverse String: {{ reversedString }}</p>
  <input v-model="myString" placeholder="Escribe aquí tu texto" />
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const myString = ref("");

    const reversedString = computed(() =>
      myString.value.split("").reverse().join("")
    );

    return {
      myString,
      reversedString,
    };
  },
};
</script>
