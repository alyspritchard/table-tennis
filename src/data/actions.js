export const addPlayers = (players) => {
    // turning array of strings, into an array of objects, with a name key
    players = players.map(player => ({ name: player }));
    return { 
        type: "initiate",
        players: players, 
    };
};