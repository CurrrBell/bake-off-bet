import { serverSupabaseClient } from "#supabase/server"

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    const id = getRouterParam(event, 'id');
    const { amount } = await readBody(event)

    const { data, error } = await client
        .rpc('place_bet', { open_bet_id: id, amount_to_bet: amount });

    if (error) {
        return error;
    }

    return { success: true };
})
