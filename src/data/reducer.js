// add players
const addPlayers = (state, { players }) => {
    return {
        ...state,
        players: players
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

// calculate winner from match object
const winner = (match) => match.p1Score > match.p2score ? match.player1 : match.player2;

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

// assign players
const assignPlayers = (state) => {
    // work out who is playing in this round
    let playing = state.roundsPlayed === 0 
    ? shuffle(state.players.map((p, index) => index)) 
    : state.matches.filter(match => match.round === state.roundsPlayed).map(match => winner(match));

    // array of matches for the next round to assign players to
    let matches = state.matches.filter(match => match.round === state.roundsPlayed + 1);

    // assign players to a match
    let assignedMatches = matches.map(match => (
        // overwrite "?" with player names
        ({...match, player1: playing.shift(), player2: playing.shift()})
    ));

    // update state
    return {
        ...state,
        matches: Object.assign(state.matches, assignedMatches),
    };
};

const startTournament = (state) => {
    return {
        ...state,
        inPlay: true,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "initiate": return startTournament(assignPlayers(generateMatches(addPlayers(state, action))));
        case "newRound": return assignPlayers(state);
        default: return state; 
    }; 
};

export default reducer;