<template>
  <div class="h-16 font-mono tracking-wider text-gray-100 text-3xl flex 
  flex-col gap-4 md:flex-row">
    <h2 class="">Hi, I'm a</h2>
    <p class="w-screen md:w-auto">{{ model }}{{ model2 }} </p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

let model = ref('')
let model2 = ref('')

const message1 = 'Web developer'
const message2 = 'Software engineer'
let OutputCondition = true
let activeComponent = false
model.value = ''

let textSelectorInterval

const activateTextSelector = async () => {
  while(OutputCondition) {
    model2.value = model2.value + '|'
    await new Promise(resolve => setTimeout(resolve, 400))
    model2.value = model2.value.replace("|", "")
    await new Promise(resolve => setTimeout(resolve, 400))
  }
}

const mostrarMensaje = async (message) => {
  for(let i = 0; i < message.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 300))
    model.value = model.value + message[i]
  }
  await new Promise(resolve => setTimeout(resolve, message.length * 300))
  model.value = ''
}

const activateTextAnimation = async () => {
  while(OutputCondition) {
    await mostrarMensaje(message1)
    await new Promise(resolve => setTimeout(resolve, message1.length * 100))
    await mostrarMensaje(message2)
    await new Promise(resolve => setTimeout(resolve, message2.length * 100))
  }
}

onMounted(() => {
  if (!activeComponent) {
    activeComponent = true
    OutputCondition = true
    activateTextAnimation()
    textSelectorInterval = activateTextSelector()
  }
})

onUnmounted(() => {
  OutputCondition = false
  activeComponent = false
  clearInterval(textSelectorInterval)
})

</script>

<style scoped>
</style>
