<script setup>
import { useCounterStore } from "../stores/counter";

const useCounter = useCounterStore();
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <h1>Home Counter: {{ useCounter.count }}</h1>
  <h2>Double: {{ useCounter.doubleCount }}</h2>
  <button @click="useCounter.increment">Increment</button>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
