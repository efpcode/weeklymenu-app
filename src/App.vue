<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheAbout from './components/TheAbout.vue'
import TheWeeklyMenu from './components/TheWeeklyMenu.vue'
import TheCongratsOverlay from './components/TheCongratsOverlay.vue'
import TheFooter from './components/TheFooter.vue'

const currentPage = ref('home')

const isCongratsShown = ref(false)

const handleNavigation = (page) => {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @navigateTo="handleNavigation" />
  <main>
    <TheAbout v-if="currentPage === 'about'"></TheAbout>
    <TheWeeklyMenu v-else @show-congrats="isCongratsShown = true"></TheWeeklyMenu>
    <TheCongratsOverlay v-model:show="isCongratsShown"></TheCongratsOverlay>
  </main>
  <TheFooter></TheFooter>
</template>
