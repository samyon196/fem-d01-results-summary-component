<script setup>
import { ref } from 'vue'
const results = ref('');
fetch('/data.json').then((response) => response.json()).then((data) => results.value = data);
</script>

<template>
<div class="p-14 flex flex-col justify-between ">
    <span class="font-bold text-3xl">Summary</span>
    <div v-for="result in results" :key="result.icon" class="flex flex-row  justify-between">
        <span class="text-lg">
            <img class="inline" :src="'.'+result.icon" />
            <span >&nbsp;&nbsp;{{ result.category }}</span>
        </span>
        <span class="font-bold">{{ result.score }}<span class="font-bold text-gray-400"> / 100</span></span>
    </div>
    <input type="button" value="Continue" class="bg-indigo-900 p-4 rounded-5xl text-white font-bold"/>
</div>

</template>
