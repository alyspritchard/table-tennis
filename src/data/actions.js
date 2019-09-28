export const addPlayers = (players) => {
    // turning array of strings, into an array of objects, with a name key
    players = players.map(player => ({ name: player }));
    return { 
        type: "initiate",
        players: players, 
    };
};

export const updateScores = (match) => {
    return { 
        type: "updateRound",
        match: match, 
    };
};

export const endRound = () => {
    return { 
        type: "nextRound",
    };
};

export const endTournament = (match) => {
    return { 
        type: "endTournament",
        finalMatch: match,
    };
};

export const newTournament = () => {
    return { 
        type: "newTournament",
    };
};