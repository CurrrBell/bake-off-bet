<template>
    <table v-if="bets.length > 0">
        <tbody>
            <tr v-for="bet in bets" :key="bet.id">
                <td>{{ bet.name }}</td>
                <td>{{ bet.prediction }}</td>
                <td>{{ formatOdds(bet.current_odds) }}</td>
            </tr>
        </tbody>
    </table>
    <span v-else>No bets!</span>
</template>
<script setup lang="ts">
import type { Bet } from './types/bet';

const bets = ref<Bet[]>([]);

async function getBets() {
    const { openBets } = await $fetch('/api/open-bets/1');
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