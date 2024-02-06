<template>
    <UForm :state="state" @submit="handleLogIn">
        <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" />
        </UFormGroup>

        <UButton type="submit">
            Submit
        </UButton>
    </UForm>
</template>
<script setup lang="ts">
const state = reactive({ email: '', password: ''})
function handleLogIn() {
    const supabase = useSupabaseClient();
    supabase.auth.signInWithOtp({ email: state.email })
        .then((response) => {
            if (response.error) {
                throw response.error;
            }

            alert('Check your email for the login link!')
        });
    console.log({state})
}
</script>