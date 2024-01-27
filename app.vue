<script setup>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://ijsufybnlehtsglhhytd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlqc3VmeWJubGVodHNnbGhoeXRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5NzY3ODcsImV4cCI6MjAyMTU1Mjc4N30.yOUt43TspCJCTBHPn21YVpYpU79k37KSPuh6Q-qAoy0')
const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>