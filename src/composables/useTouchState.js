import { ref } from "vue";

export function useTouchState() {
  const isTouched = ref(false);

  function handledTouchStart() {
    isTouched.value = true;


  }

  function handledTouchEnd() {
    isTouched.value = false;

  }

  return {
    isTouched,
    handledTouchStart,
    handledTouchEnd,


  };
}
