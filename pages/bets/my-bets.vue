<template>
    <UTable :rows="bets" :columns="columns" :loading="isLoading">
        <template #odds-data="{row}">
            {{ formatPercent(row.odds) }}
        </template>
        <template #result-data="{row}">
            {{ row.result ?? 'Pending' }}
        </template>
    </UTable>
</template>
<script setup lang="ts">
import type { Bet } from '~/types/bet';

const isLoading = ref(true);

let bets = reactive<Bet[]>([]);

$fetch<Bet[]>('/api/bets')
    .then((response) => {
        bets = response;
        isLoading.value = false;
    });

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
        key: 'amount',
        label: 'Amount',
    },
    {
        key: 'odds',
        label: 'Odds',
    },
    {
        key: 'result',
        label: 'Result'
    }
]
</script>