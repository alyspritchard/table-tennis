import initial from "./initial";

// add players
const addPlayers = (state, { players }) => {
    return {
        ...state,
        players: players,
        totalRounds: Math.log2(players.length),
    };
};

// shuffle an array
const shuffle = (array) => {
    // use Fisher-Yates algorithm to shuffle arrays
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// setup counter for matchID
let matchID = 0;

// generate matches
const generateMatches = (state) => {
    let totalRounds = Math.log2(state.players.length);
    let matches = [];
    let totalMatches = state.players.length / 2;
    
    for (let i = 1; i <= totalRounds; i += 1) {
        for (let j = 1; j <= totalMatches; j += 1) {
            matches.push({
                id: matchID,
                round: i,
                player1: null,
                player2: null,
                p1Score: 0,
                p2Score: 0,
            });
            matchID += 1;
        }
        totalMatches = totalMatches / 2;
    }
    
    // update state
    return {
        ...state,
        matches: matches,
    };
};

// calculate winner from match object
const winner = (match) => match.p1Score > match.p2Score ? match.player1 : match.player2;

// assign players
const assignPlayers = (state) => {
    let playing = [];
    // work out who is playing in this round
    if (state.roundsPlayed === 0) {
        playing = shuffle(state.players.map((p, index) => index));
    } else {
        let matches = state.matches.filter(match => match.round === state.roundsPlayed);
        console.log(matches);
        let winners = matches.map(match => winner(match));
        console.log(winners);
        playing = winners;
    }
    console.log(playing);

    let matches = state.matches.map(match => {
        if (match.round === state.roundsPlayed + 1) {
            return {
                ...match,
                player1: playing.shift(),
                player2: playing.shift(),
            };
        }
        return match;
    })

    // update state
    return {
        ...state,
        matches: matches,
    };
};

const startTournament = (state) => {
    return {
        ...state,
        inPlay: true,
    };
};

const updateScores = (state, { match }) => {
    let matches = state.matches.map(currentMatch => {
        if (currentMatch.id === match.id) {
            return {
                ...currentMatch,
                p1Score: match.p1Score,
                p2Score: match.p2Score,
            };
        }
        return currentMatch;
    })

    return {
        ...state,
        matches: matches,
    };
};

const roundComplete = (state) => {
    return {
        ...state,
        roundsPlayed: state.roundsPlayed + 1,
    }
}

const selectChampion = (state, { finalMatch }) => {
    const champion = winner(finalMatch);
    console.log(champion);
    return {
        ...state,
        champion: champion,
    }
}

const reset = () => {
    return {
        ...initial
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "initiate": return startTournament(assignPlayers(generateMatches(addPlayers(state, action))));
        case "updateRound": return updateScores(state, action);
        case "nextRound": return assignPlayers(roundComplete(state));
        case "endTournament": return roundComplete(selectChampion(state, action));
        case "newTournament": return reset(state);
        default: return state; 
    }; 
};

export default reducer;