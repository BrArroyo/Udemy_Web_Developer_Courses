<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import { useCounterStore } from "../stores/counter";

const useCounter = useCounterStore();
</script>

<template>
  <main>
    <TheWelcome />
    <h1>Home Counter: {{ useCounter.count }}</h1>
    <h2>Double: {{ useCounter.doubleCount }}</h2>
    <button @click="useCounter.increment">Increment</button>
  </main>
</template>
