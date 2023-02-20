<script setup>
import { ref } from 'vue'
</script>

<template>
    <div class="p-10 flex flex-col justify-between items-center">
        <div class="text-3xl font-bold text-gray-300">Your result</div>
        <div class="m-4 rounded bg-gradient-to-b from-indigo-900 to-indigo-700 h-48 w-48 rounded-1/2 flex flex-col justify-center items-center">
            <span class="text-6xl font-bold text-gray-50 my-2">76</span>
            <span class="text-gray-100">of 100</span>
        </div>
        <div class="text-3xl font-bold text-gray-100">Great</div>
        <div class="text-gray-200 text-centerw">You scored higher than 65% of<br /> the people who have taken<br /> these tests.</div>
    </div>
    
</template>