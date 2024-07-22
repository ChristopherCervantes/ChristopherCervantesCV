<template>
  <div class="flex flex-col items-center pt-24">
    <div class="w-3/4 h-24 md:w-1/3 md:overflow-visible">
      <CoolAnimation/>
    </div>
    
      <div class="flex flex-col items-center md:flex-row md:pt-8">
        <div class="w-screen flex flex-col
        items-center my-8 text-white font-sans pb-8 md:self-stretch 
        md:w-1/2">
          <h2 class="text-4xl text-center 
          pt-2 border-2 border-double border-fuchsia-300 mb-8 shadow-box 
          shadow-fuchsia-400 h-16 w-3/4 rounded">
            About me
          </h2>
          <p class="text-xl text-center pt-8 w-3/4">
            I'm a passionate software engineer constantly learning and focused in frontend development,
            with hands on experience in the software field I'm eager to tacle new challenges that 
            will further enhance my web skills principally ui/ux and frontend.
          </p>   
        </div>
        
        <div class="w-screen flex flex-col
        items-center my-8 text-white font-sans pb-8 md:self-stretch md:w-1/2">
          <h2 class="text-4xl text-center 
          pt-2 border-2 border-double border-fuchsia-300 mb-8 shadow-box 
          shadow-fuchsia-400 h-16 w-3/4 rounded">My Skills</h2>
          <SkillsArea/>
        </div>
      </div>


     
    
    <div class="w-3/4 h-24 my-8 ">
      <DownloadCV/>
    </div>

    <div class="w-screen flex flex-col items-center my-8 text-white font-sans pb-8">
      <h2 class="text-4xl text-center 
      pt-2 border-2 border-fuchsia-300 mb-8 shadow-box
      shadow-fuchsia-400 h-16 w-3/4 rounded md:w-1/4 md:min-w-96">My projects</h2>
      <ProjectsArea/>
    </div>
    
  </div>
  
</template>

<script setup>
import SkillsArea from '@/components/SkillsArea.vue'
import DownloadCV from '@/components/DownloadCV.vue'
import CoolAnimation from '@/components/CoolAnimation.vue'
import ProjectsArea from '@/components/ProjectsArea.vue'

</script>
