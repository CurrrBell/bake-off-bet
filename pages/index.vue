<template>
    <UButton>test</UButton>
    <UCard v-if="bets.length > 0">
        <UTable :columns="columns" :rows="bets" />

    </UCard>
    <span v-else>No bets!</span>
</template>
<script setup lang="ts">
import type { Bet } from '../types/bet';

const config = useAppConfig();

console.log(config)

const bets = ref<Bet[]>([]);
const columns = [
    {
        key: 'name',
        label: 'Name',
    },
    {
        key: 'prediction',
        label: 'Prediction',
    },
    {
        key: 'current_odds',
        label: 'Current Odds',
    }
]

async function getBets() {
    const { openBets } = await $fetch('/api/open-bets/Weekly result');
    bets.value = openBets ?? [];
}

function formatOdds(odds: number) {
    return `${odds * 100}%`;
}

onMounted(() => {
    getBets()
});

</script>
<style scoped>
    td {
        padding: 8px;
    }
</style>