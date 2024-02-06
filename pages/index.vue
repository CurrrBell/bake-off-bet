<template>
    <UCard>
        <UTable :columns="columns" :rows="bets" :loading="isLoading">
            <template #action-data="{ row }">
                <UButton @click="placeBet(row)">Place bet</UButton>
            </template>
        </UTable>
    </UCard>
</template>
<script setup lang="ts">
import type { Bet } from '../types/bet';

const isLoading = ref(true);

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
    },
    {
        key: 'action',
    }
]

async function getBets() {
    const { openBets } = await $fetch('/api/open-bets/Weekly result');
    bets.value = openBets ?? [];
    isLoading.value = false;
}

function formatOdds(odds: number) {
    return `${odds * 100}%`;
}

function placeBet(bet: Bet) {
    return navigateTo({
        path: 'bets/new',
        query: {
            id: bet.id,
            name: bet.name,
            prediction: bet.prediction,
        },
    });
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