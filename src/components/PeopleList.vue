<template>
  <ul>
    <li v-for="person in people" :key="person">{{ person }}</li>
  </ul>
  <button @click="addPerson">Añade a Paco</button>
  <teleport to="#out-of-body">
    <h3>Estoy con {{ people.length }} personas!</h3>
  </teleport>
</template>

<script>
import { onMounted, reactive } from "vue";
import { getUsers } from "../functions/userApi";

export default {
  async setup() {
    const users = await getUsers();

    const people = reactive(
      users.map((user) => `${user.name.first} ${user.name.last}`)
    );

    const addPerson = () => people.push("Paco Culebras");

    return {
      people,
      addPerson,
    };
  },
};
</script>
