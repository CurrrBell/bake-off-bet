<template>
    <UHorizontalNavigation :links="links" />
    <main>
        <slot />
    </main>
</template>
<script setup lang="ts">
const links = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'Bets',
        to: '/bets',
    },
    {
        label: 'My Bets',
        to: '/bets/my-bets',
    }
]
</script>