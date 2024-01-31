import { serverSupabaseClient } from "#supabase/server"
import type { Bet } from "~/types/bet";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    // const type = getRouterParam(event, 'type');

    const { data } = await client
        .rpc('get_open_bets');

    return { openBets: data as unknown as Bet[] };
})
