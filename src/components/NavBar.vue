<script setup>
import { ref, onMounted } from 'vue';

  let icon = ref('bars');

  const openCloseMenu = () => {
    let list = document.querySelector('ul');
    let screen = document.getElementById('screen');
    icon.value === 'bars' ? (icon.value = 'times', list.classList.add('top-[48px]'), list.classList.add('opacity-100'), screen.classList.add('h-screen') ,document.body.classList.add('h-full'), document.body.classList.add('overflow-hidden') )
    : (icon.value = 'bars', list.classList.remove('top-[48px]'), list.classList.remove('opacity-100'), screen.classList.remove('h-screen') ,document.body.classList.remove('h-full'), document.body.classList.remove('overflow-hidden'))
  }

  onMounted(() => {
    document.body.classList.remove('h-full') 
    document.body.classList.remove('overflow-hidden')
    document.body.classList.add('h-auto') 
  })

</script>

<template>
  
  <nav class="flex sticky top-0 left-0 z-2 w-full h-12 
  drop-shadow-md shadow-black content-center bg-fuchsia-200/10 backdrop-blur 
  items-center justify-between md:px-16">
    <div class="flex justify-between w-full md:w-10 items-center mx-3">
      <div  class="pl-6 select-none text-fuchsia-200 text-lg">
        <a class="flex flex-row gap-2"><fa :icon="['fas', 'house']" class="pt-1 filter: shadow-fuchsia-300 text-fuchsia-100"/></a>
      </div>
      <span 
      class="text-3xl select-none cursor-pointer font-medium md:hidden block mx-5 [text-shadow:_1px_1px_4px_var(--tw-shadow-color)] shadow-fuchsia-300 text-fuchsia-100" 
      @click="openCloseMenu">
        <fa :icon="['fas', icon]"/>
      </span>
    </div>
    <ul class=" z-[-1] flex flex-col w-full text-center absolute bg-black/30 md:bg-transparent
                md:flex md:flex-row md:items-center  md:z-auto md:static  md:w-auto 
                md:py-0 md:opacity-100 opacity-0 top-[-400px] 
                transition-all ease-in duration-500 py-0 overflow-y-auto md:overflow-hidden max-h-screen ">
        <li class="h-32 pt-16 md:h-full md:py-0 bg-black/70 md:bg-transparent flex flex-col items-center">
          <div class="w-2/4 md:w-auto md:bg-transparentpl-6 select-none text-lg tracking-wide border-b-2 border-fuchsia-200 ">
             <p class="[text-shadow:_1px_1px_8px_var(--tw-shadow-color)] shadow-fuchsia-300 text-fuchsia-100">
              <a href="https://www.linkedin.com/in/christopher--cervantes" target="_blank">My LinkedIn</a>
            </p>
          </div>
        </li>
        <li class="h-full md:bg-transparent backdrop:blur hidden md:flex">
          <p class="pl-8 select-none font-medium text-fuchsia-100 hidden text-lg  md:inline">|</p>
        </li>
        <li class="h-48 pt-16 pb-16 md:h-full md:py-0 bg-black/70 md:bg-transparent flex flex-col items-center">
          <div  class="w-2/4 md:w-auto md:bg-transparent md:ml-6 select-none text-lg tracking-wider border-b-2 border-fuchsia-200 ">
            <p class="[text-shadow:_1px_1px_8px_var(--tw-shadow-color)] shadow-fuchsia-300 text-fuchsia-100">
              <a href="https://github.com/ChristopherCervantes" target="_blank">My GitHub</a>
            </p>
          </div>
        </li>
        <div id='screen' class="z-10 bg-black/50 md:h-full">

        </div>
    </ul>
    
  </nav>
</template>


<style scoped>

.overflowHidden {
  overflow: hidden;
  margin: 0;
  touch-action: none;
  -ms-touch-action: none;
  height: 100vh;
}

</style>