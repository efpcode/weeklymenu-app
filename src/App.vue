<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheAbout from './components/TheAbout.vue'
import TheWeeklyMenu from './components/TheWeeklyMenu.vue'
import TheCongratsOverlay from './components/TheCongratsOverlay.vue'
import TheFooter from './components/TheFooter.vue'

const currentPage = ref('home')

const isCongratsShown = ref(false)

const isConstrastMod = (contrast) => {
  if(contrast){
    document.body.classList.add('high-contrast')
  }else{
    document.body.classList.remove('high-contrast')

  }
}

const handleNavigation = (page) => {
  currentPage.value = page
}

</script>

<template>
  <TheHeader @navigateTo="handleNavigation" @isMode="isConstrastMod"/>
  <main>
    <TheAbout v-if="currentPage === 'about'"></TheAbout>
    <TheWeeklyMenu v-else @show-congrats="isCongratsShown = true"></TheWeeklyMenu>
    <TheCongratsOverlay v-model:show="isCongratsShown"></TheCongratsOverlay>
  </main>
  <TheFooter></TheFooter>
</template>
