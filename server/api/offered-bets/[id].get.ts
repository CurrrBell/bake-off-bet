import { serverSupabaseClient } from "#supabase/server"
import type { Bet } from "~/types/bet";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    const id = getRouterParam(event, 'id');

    const { data, error } = await client
        .rpc('get_offered_bet', { id_to_get: id });

    return { bet: data as unknown as Bet };
})
