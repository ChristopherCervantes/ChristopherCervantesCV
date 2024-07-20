<template>
    <div class="h-64 overflow-hidden text-xl pt-8">
        <div class="flex flex-row gap-2 justify-evenly mb-4 mx-2">
          <button class="border-b-2 px-2 md:px-8 md:pb-1"
          :class="{'[text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-fuchsia-300 border-fuchsia-300 text-fuchsia-100' : active == 'languages'}" @click="ListLanguajes">Languages</button>
          <button class="border-b-2 px-2 md:px-8 md:pb-1" 
          :class="{'[text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-fuchsia-300 border-fuchsia-300 text-fuchsia-100' : active == 'frameworks'}" @click="ListFrameworks">frameworks</button>
          <button class="border-b-2 px-2 md:px-8 md:pb-1"
           :class="{'[text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-fuchsia-300 border-fuchsia-300 text-fuchsia-100' : active == 'softskills'}" @click="ListSoftSkills">Soft skills</button>
        </div>
        <ul class="list-disc pl-8">
          <li v-for="item, index in model.value" :key="index"> {{ item }} </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, defineModel, onMounted} from 'vue'

const languages = ref(['Javascript', 'Python', 'SQL', 'C++', 'git'])
const frameworks = ref(['Vue 3', 'tailwind'])
const softSkills = ref(['Collaboration', 'Teamwork', 'Problem-solving', 'Persistence'])

let model = defineModel()
model = languages.value
let active = ref('languages') 

onMounted(() => {  
  model.value = languages.value
})


const ListLanguajes = () => {
  model.value = languages.value
  active.value = 'languages'
}

const ListFrameworks = () => {
  model.value = frameworks.value
  active.value = 'frameworks'
}

const ListSoftSkills = () => {
  model.value = softSkills.value
  active.value = 'softskills'
}

</script>

<style scoped>

</style>