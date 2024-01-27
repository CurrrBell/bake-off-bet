<script setup lang="ts">
const countries = ref([]);

const client = useSupabaseClient();


async function getCountries() {
    const { data } = await client.from('countries').select();
    countries.value = data ?? [];
}

onMounted(() => {
  getCountries()
});

</script>
<template>
  <ul v-if="countries.length > 0">
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
  <span v-else>No countries!</span>
</template>
