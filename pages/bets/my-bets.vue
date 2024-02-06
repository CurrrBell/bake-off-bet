<template>
    {{bets}}
</template>
<script setup lang="ts">
import type { Bet } from '~/types/bet';

let bets = reactive<Bet[]>([]);

bets = await $fetch<Bet[]>('/api/bets')
</script>