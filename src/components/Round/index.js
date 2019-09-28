import { connect } from "react-redux";
 
import Round from "./Round";

import { updateScores, endRound, endTournament } from "../../data/actions";

const mapStateToProps = ({ matches, totalRounds }, { round }) => { 
    return { 
        round: round,
        matches: matches,
        totalRounds: totalRounds,
    }; 
};

const mapDispatchToProps = (dispatch) => { 
        return {
            submitScores: (match) => dispatch(updateScores(match)),
            endRound: () => dispatch(endRound()),
            endTournament: (match) => dispatch(endTournament(match)),
        }; 
    };

export default connect(mapStateToProps, mapDispatchToProps)(Round);