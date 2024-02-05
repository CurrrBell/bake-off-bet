<template>
    {{ bet }}
    <UInput v-model="amount" />
    <UButton @click="placeBet">Place bet</UButton>
</template>
<script setup lang="ts">
import type { Bet } from '~/types/bet';

const { query } = useRoute();

const bet = ref<Bet>();
const amount = ref(0);

$fetch(`/api/offered-bets/${query.id}`)
    .then((response) => bet.value = response.bet);



function placeBet() {
    $fetch(`/api/bets/${query.id}`, {
        method: 'POST',
        body: {
            amount: amount.value,
        },
    });
}

</script>