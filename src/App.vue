<script setup>
import {ref} from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheAbout from './components/TheAbout.vue';

const currentPage = ref("home");

const handleNavigation = (page) =>{
  currentPage.value = page;

}
</script>

<template>
  <TheHeader @navigateTo="handleNavigation"/>
  <main>
  <TheAbout v-if="currentPage === 'about'"></TheAbout>
      <p v-else>HelloWorld from main!</p>

  </main>

</template>

<style>


@media screen and (min-width:768px){

 body{
    background-color:blue;

  }
}


</style>

