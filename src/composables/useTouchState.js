import { ref } from "vue";


export function useTouchState() {

  const isTouched = ref(false);
  function setTouchStart() {
    isTouched.value = true;
    console.log("Touch started")

  }

  function setTouchEnd() {

    isTouched.value = false;
    console.log("Touch ended");

  }

  return {
    isTouched,
    setTouchStart,
    setTouchEnd,


  };
}
