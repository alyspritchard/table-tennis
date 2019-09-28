import { connect } from "react-redux";
 
import Tournament from "./Tournament";

import { newTournament } from "../../data/actions";

const mapStateToProps = ({ totalRounds, roundsPlayed, players, champion }) => { 
    return {
        totalRounds: totalRounds,
        roundsPlayed: roundsPlayed,
        players: players,
        champion: champion,
    }; 
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleNewTournament: () => dispatch(newTournament())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);