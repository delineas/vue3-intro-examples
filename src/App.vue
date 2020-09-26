<template>
  <h1>Ejercicio 1: Reverse String</h1>
  <ReverseString />
  <hr />
  <h1>Ejercicio 2: Reverse String (v-model, emit)</h1>
  <p>Reversed String: {{reversedString}}</p>
  <InputString v-model:text="myText"></InputString>
  <hr />
  <h1>Ejercicio 3: People List (reactivity, teleport)</h1>
  <PeopleReactiveList />
  <hr />
  <h1>Ejercicio 4: People List (Suspense)</h1>
  <Suspense>
    <template #default>
      <people-list></people-list>
    </template>
    <template #fallback>
      <div class="text-center">Cargando...</div>
    </template>
  </Suspense>
  <hr />  
</template>

<script>
import ReverseString from './components/ReverseString.vue'
import InputString from './components/InputString.vue'
import PeopleReactiveList from './components/PeopleReactiveList.vue'
import PeopleList from './components/PeopleList.vue'

export default {
  name: 'App',
  components: {
    ReverseString,
    InputString,
    PeopleReactiveList,
    PeopleList,
  },
  /** Ejercicio 2 */
  data() {
    return {
      myText: ''
    }
  },
  computed: {
    reversedString() {
      return this.myText.split("").reverse().join("")
    }
  }
}
</script>
