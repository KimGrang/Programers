function solution(players, calls) {
    const playerIDXMap = new Map();
    for (let i = 0; i < players.length; i++) {
        playerIDXMap.set(players[i], i);
    }
    for (let call of calls) {
        let idx = playerIDXMap.get(call);
        [players[idx], players[idx - 1]] = [players[idx - 1], players[idx]];
        playerIDXMap.set(players[idx], idx);
        playerIDXMap.set(players[idx - 1], idx - 1);
    }
    return players;
}