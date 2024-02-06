import { serverSupabaseClient } from "#supabase/server"
import type { Bet } from "~/types/bet";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);

    const { data, error } = await client
        .rpc('get_bets_by_user');

    return data as unknown as Bet[];
})
