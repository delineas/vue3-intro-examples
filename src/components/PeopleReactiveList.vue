<template>
  {{ people }} <br />
  <teleport to="#out-of-body">
    <h3>Estoy con {{ people.length }} personas!</h3>
  </teleport>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
export default {
  setup() {
    const people = reactive([
      "Pepe López",
      "María García",
      "Half Impostor",
      "Full Malandriner",
    ]);

    onMounted(() => (people[0] = "Supercoco"));

    // const goodPerson = reactive({
    //     name: "Mauricio",
    //     age: 21,
    // });

    // let { name, age } = toRefs(goodPerson);
    // console.log(name);
    // onMounted(() => (name.value = 'Tere'))

    return {
      name,
      people,
    };
  },
};
</script>
