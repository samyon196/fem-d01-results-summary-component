<script setup>
import { ref } from 'vue'
const results = ref('');
fetch('/data.json').then((response) => response.json()).then((data) => results.value = data);
</script>

<template>
{{ results   }}
<img src="./assets/images/icon-memory.svg" />
</template>

<style scoped>
</style>
