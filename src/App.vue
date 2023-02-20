<script setup>
import SummaryCard from './components/SummaryCard.vue';
import ResultsCard from './components/ResultsCard.vue'
</script>

<template>
  
<div class="_home h-screen v-screen flex justify-center items-center bg-gray-100">
  <div class="_cardsContainer flex flex-row flex-wrap bg-white shadow-2xl rounded-5xl justify-center items-center">
    <ResultsCard class="_firstCard w-94 basis-94  h-120 bg-purple-700 rounded-5xl shadow-2xl z-10"></ResultsCard>
    <SummaryCard class="_secondCard  w-86 basis-86 h-120 bg-white rounded-5xl z-0"/>
  </div>
</div>
</template>

<style scoped>
</style>
