<template>
  <header>
    <button
      :class="['header__button']"
      @click="toggleMenu"
      type="button">
      <img class="header__button-img" alt="hamburger menu" src="../assets/hamburgermenu.svg">
      <span class="header__button-label">Menu</span>
    </button>
    <a @click.prevent="goToHome" :class="{'header__link--visible':menuVisible, 'header__link--active':logoClickable}" class="header__link" href="#"><img :class="{'header__logo--sliding-top':menuVisible}"  alt="Week Menu Logo - Take-off the Week!" class="header__logo" src="../assets/logo.svg" /></a>
    <transition name="nav-item-fly">
    <nav v-if="menuVisible" class="nav">
      <ul class="nav__list">
          <li
            :class="['nav__item']">
          <a :class="['nav__link']" href="#" @click.prevent="goToHome">Home</a>
        </li>

          <li
            :class="['nav__item']">
            <a :class="['nav__link']" href="#" @click.prevent="goToAbout">About Us</a>
        </li>
      </ul>
    </nav>
    </transition>

  </header>
</template>


<script setup>
import {ref, defineEmits} from "vue";

const menuVisible = ref(false);
const logoClickable = ref(false);


const toggleMenu = () => {
  const delayClick= 2500;
  menuVisible.value = !menuVisible.value;

  if (menuVisible.value){
    setTimeout(() => {
      logoClickable.value=true;

    }, delayClick);
  }
else{
    logoClickable.value=false;
  }
}

const emit = defineEmits(['navigateTo']);


const goToAbout = () => {
  emit("navigateTo", "about");
}

const goToHome = () => {
  emit("navigateTo", "home");
}

</script>


<style scoped>

/* Header Global Settings */
header{
  display:flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  width:90%;
  padding:2rem;
  margin:0 auto;
}


/* Header Menu Button */

.header__button{
  background:var(--color-secondary-1);
  height:auto;
  max-width:7rem;
  max-height:7rem;
  border-radius: 2rem;
  padding:0.5rem;
  flex-direction:column;
  display:flex;
  align-items:center;
  position: relative;
  z-index: 10;
}

.header__button-img{
  width: 50%;
  height: auto;
  margin: 0 auto;

}

.header__button-label{
  text-align:center;
  padding:0.5rem;
color: var(--color-text-dark);
  font-family: "Cutive Mono", monospace;
  font-size: x-large;
  font-weight:600;
}


/* Link in image */

.header__link{
  display: block;
  height: 0;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  z-index: 1;
}

.header__link--visible{
  height:auto;
}

.header__link--active{
  pointer-events:auto;
}

/* Logo Header Images */

.header__logo {
  max-width:27rem;
  height:auto;
  width:100%;
  border-radius: 2rem;
  margin:1rem auto;
  pointer-events:none;
  transition: opacity 1.5s ease-in-out, transform 2.5s ease-in-out;
  opacity:0;
  transform:translateY(-100%);
}
.header__logo--sliding-top{
  opacity:1;
  transform:translateY(0%);
}

/* Header Styling navigation */

.nav{
  width:100%;
  font-size:x-large;
  text-align:center;
}

.nav-item-fly-enter-from{
  transform: translateX(-100%);
  pointer-events:none;
}

.nav-item-fly-enter-active {
  transition:transform 2.5s ease;
}

.nav-item-fly-leave-active {
  transition:opacity 1.0s ease ,transform 1.5s ease;
}

.nav-item-fly-leave-from {
  transform: translateY(0);
  opacity:1;
}

.nav-item-fly-leave-to {
  transform: translateY(-100%);
  opacity:0;
  pointer-events:none;
}


.nav__item{
  border-radius:2rem;
  margin:1.2rem auto;
  padding:0;
}

.nav__link{
  display: block;
  width: 100%;
  padding: 0rem;

  font-family: "Cutive", serif;
}




/* Utility class */
.header__button:hover{
  background:var(--color-primary-1);
}

.nav__item:hover{
  background:var(--color-cta-highlight-dark);
}

/* Remove sticky highlight for ios devices */


@media (hover: none) {
  .header__button {
 box-shadow: 0 8px 8px -4px  var(--color-secondary-1);
  }

  .nav__item {
  background:var(--color-cta-highlight-dark);
 box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #FFE795;
  }


}

</style>

