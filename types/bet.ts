export type Bet = {
    id: number,
    name: string,
    prediction: 'Star Baker' | 'Eliminated' | 'High' | 'Safe' | 'Low',
    current_odds: number,
};