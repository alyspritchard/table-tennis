// add players
const addPlayers = (state, { players }) => {
    return {
        ...state,
        players: players
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "initiate": return addPlayers(state, action);
        default: return state; 
    }; 
};

export default reducer;