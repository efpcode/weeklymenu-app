<template>
<div>
  <h1>Welcome to Weekly Menu - App</h1>
    <section class="menu-app__controls">
      <button v-if="isAllDayCompleted" @click="resetAll" class="menu-app__button menu-app__button--reset"> <span class="menu-app__button--reset-symbol">{{ arrows.reset}}</span>Reset Week Menu</button>
      <select class="menu-app__select menu-app__select--style menu-app__select--base"  v-model="selectedDayId">
        <option value="" selected="selected">Day {{arrows.down}}{{arrows.doubleBar}}{{arrows.up}}</option>
        <option v-for="day in days" :key="day.id" :value="day.id"> {{ isToday(day.id) ? arrows.right : "" }} {{ day.dish? arrows.dish : "" }} {{ day.name }}</option>
      </select>
      <input class="menu-app__input" type="text" v-model="enteredDishValue" placeholder="Enter a dish "/>
      <button v-if="selectedDayId!==''" @click="addDish" type="button" class="menu-app__button menu-app__button--add">{{ isAddButton ? 'Add': 'Replace' }} Dish</button>
      <p class="menu-app__message" v-if="selectedDayId===''"> Please select a day</p>
    </section>

    <section class="menu-app__view">
      <ul :class="['menu-app__list']" >
        <li :class="['menu-app__item',{'menu-app__item--today':isToday(day.id)}]" :key="day.id" v-for="day in days">
          <h2 :class="['menu-app__header',{'menu-app__header--today': isToday(day.id)}]"> {{ day.name}} </h2>
          <article v-if="day.dish !== ''"> {{ day.dish }} </article>
          <button @click="removeDayMenu(day.id)" v-if="day.dish !== ''" class="menu-app__button menu-app__button--remove">Remove</button>
        </li>
      </ul>
    </section>
  </div>

</template>

<script setup>
import { ref, computed, defineEmits, watch} from "vue";

const selectedDayId=ref("");
const enteredDishValue=ref("");

const arrows = {
  down: "\u25BC",     // ▼
  doubleBar: "\u2551", // ║
  up: "\u25B2",        // ▲
  right: "\u25B6", // ▶
  reset: "\u267A", //
  dish:"\u25C9"
};

const days = ref([
  { id: 1, name: "Monday", dish: "" },
  { id: 2, name: "Tuesday", dish: "a" },
  { id: 3, name: "Wednesday", dish: "a" },
  { id: 4, name: "Thursday", dish: "a" },
  { id: 5, name: "Friday", dish: "a" },
  { id: 6, name: "Saturday", dish: "a" },
  { id: 0, name: "Sunday", dish: "a" },
]);

const selectedDay = computed(() =>{
return days.value.find(day => day.id === Number(selectedDayId.value));

});


const addDish = () =>{
  if(selectedDay.value){
   selectedDay.value.dish = enteredDishValue.value.trim();
    enteredDishValue.value ="";

  }
};

const resetAll = () => {

  days.value = days.value.map( day => ({
    ...day,
    dish:""
  }));

  selectedDayId.value="";

}

const isAddButton = computed(() => {
return selectedDay.value.dish.trim() === "";

})



const isToday =((dayId) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  return currentDay === dayId;

});

const removeDayMenu = (dayId) =>{
  days.value = days.value.map(day => {
    if(day.id === dayId){

      return {...day, dish:""};
    }
    return day;
  });

    selectedDayId.value="";
  }

const emits = defineEmits(['showCongrats']);


const isAllDayCompleted = computed( () => {
 return days.value.every(day => day.dish.trim() !== "");

});

watch(isAllDayCompleted, (newValue, oldValue) => {
  if(newValue === true && oldValue === false){
    emits("showCongrats");
    console.log("Emits!!!!!")
  }
});

</script>


<style>

.menu-app__header {
  background:transparent;
  color:var(--color-secondary-1);
}
.menu-app__header--today {
  color:var(--color-text-dark);
}

.menu-app__select,
.menu-app__button{
  background-color: var(--color-secondary-1);
  font-family: "Fugaz One", sans-serif;
  text-align: center;
  text-align-last: center;
  font-size: x-large;
  color: var(--color-text-dark);
  width: 100%;
  border: none;
}

.menu-app__select--base{
  appearance: none !important;           /* Crucial! Removes native styling */
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
}

.menu-app__select--style,
.menu-app__button--add {
  padding: 1rem;
  border-radius:3rem;
  border: none;
  margin: 0.6rem auto;
}

.menu-app__select:hover,
.menu-app__button:hover {
  background-color: var(--color-primary-1);

}

.menu-app__button--reset {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding:0.5rem;
  margin: 1rem auto;
  background: var(--color-background-dark);
  border-radius:1rem 1rem 3rem 3rem;


}
.menu-app__button--reset-symbol{
  font-size:2.2rem;
  letter-spacing:0.4rem;
}

.menu-app__button--remove {
  padding: 0;
  border-radius: 2rem;
  margin: 1rem auto;
}

.menu-app__input {
  background-color: var(--color-background-light);
  border-radius: 2rem;
  padding: 2rem;
  font-size: large;
  color: var(--color-text-light);
  font-weight: 700;
  margin:0.5rem auto;
  border:0;
  width:100%;
}

.menu-app__message {
  font-family:"Cutive Mono", monospace;
  background: var(--color-cta-highlight-light);
  color: var(--color-text-light);
  font-size: x-large;
  border-radius: 2rem;
  text-wrap:balance;
  width:100%;
  margin:0.6rem auto;

}

.menu-app__list {
  padding:1rem;
  position: relative;
  margin:0.5rem auto;
}

.menu-app__item--today {
  background:var(--color-cta-highlight-dark);

}

.menu-app__item {
  border:var(--color-cta-highlight-dark) 2px solid;
  margin:0.6rem auto;
  padding:1rem;
  border-radius:2rem/5rem;
}

@media (hover: none) {

  .menu-app__select,
  .menu-app__button {
    box-shadow: 0 8px 8px -4px var(--color-secondary-1);
    background-color:var(--color-secondary-1) !important;
    border: none;
  }

  .menu-app__button--reset{
    box-shadow: 0 8px 8px -4px var(--color-background-light);
    background-color:var(--color-background-dark) !important;
    border: none;

  }

}
@media (hover: none) and (pointer: coarse) {
  .menu-app__select--base {
    appearance: auto !important;
    -webkit-appearance: auto !important;
    font-size: 1.6rem;
    min-height: 48px;
  }
}
</style>
