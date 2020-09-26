<template>
  <input placeholder="Escribe aquí" :value="text" @input="updateString" />
</template>

<script>
export default {
  props: {
    text: String,
  },
  setup(props, { emit }) {
    const updateString = (event) => {
      emit("update:text", event.target.value);
    };

    return {
      updateString,
    };
  },
};
</script>
