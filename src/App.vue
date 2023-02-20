<script setup>
import { ref } from 'vue'
const results = ref('');
fetch('/data.json').then((response) => response.json()).then((data) => results.value = data);
</script>

<template>
{{ results   }}
</template>

<style scoped>
</style>
