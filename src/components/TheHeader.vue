<template>

  <header>

  <button @click="toggleMenu" class="header__button" type="button">
      <img class="button__img" alt="hamburger menu" src="../assets/hamburgermenu.svg">
    </button>
    <a :class="{'--visible':menuVisible}" class="header__link" href="/"><img :class="{'--sliding-top':menuVisible}"  alt="Week Menu Logo - Take-off the Week!" class="header__logo" src="../assets/logo.svg" /></a>


    <nav v-if="menuVisible" class="header__nav">
      <ul class="header__list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="../../public/about.html">About Us</a>
        </li>
      </ul>

    </nav>

  </header>


</template>

<script setup>
import {ref} from "vue";
import {useTouchState} from "../composables/useTouchState.js";
const {isTouched,     handledTouchStart,
    handledTouchEnd,
 } = useTouchState();

const menuVisible = ref(false);

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
}




</script>

<style scoped>

header{
  display:flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  width:90%;
  padding:2rem;
  margin:0 auto;
}

.header__link{
  height:0;
}

.header__link.--visible{
  height:auto;
}

.header__logo {
  max-width:27rem;
  height:auto;
  width:100%;
  border-radius: 2rem;
  margin:1rem auto;
  transition: opacity 1.5s ease-in-out, transform 2.5s ease-in-out;
  opacity:0;
  pointer-events:none;
  transform:translateY(-100%);

}

.header__logo.--sliding-top{
  opacity:1;
  pointer-events:auto;
  transform:translateY(0%);
}

.header__button{
  background:var(--color-secondary-1);
  height:auto;
  max-width:7rem;
  max-height:7rem;
  border-radius: 2rem;
  text-align:center;


}
.button__img{
  width: 50%;
  height: auto;
  margin: 0 auto;

}

.header__nav{
 font-size:xx-large;
  width:100%;
  text-align:center;

}



</style>

