import { serverSupabaseClient } from "#supabase/server"

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    // const type = getRouterParam(event, 'type');

    const { data } = await client
        .rpc('get_open_bets');

    return { openBets: data };
})
