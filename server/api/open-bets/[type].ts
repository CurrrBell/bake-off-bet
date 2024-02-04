import { serverSupabaseClient } from "#supabase/server"
import type { Bet } from "~/types/bet";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    const type = getRouterParam(event, 'type');

    const { data, error } = await client
        .rpc('get_open_bets', {
            type: decodeURI(type)
        });

    if (error) {
        return error;
    }

    return { openBets: data as unknown as Bet[] };
})
