<script setup lang="ts">
const bets = ref([]);

async function getBets() {
    const { openBets } = await $fetch('/api/open-bets/1');
    bets.value = openBets ?? [];
}

onMounted(() => {
    getBets()
});

</script>
<template>
  <ul v-if="bets.length > 0">
    <li v-for="country in bets" :key="country.id">{{ country.name }}</li>
  </ul>
  <span v-else>No bets!</span>
</template>
