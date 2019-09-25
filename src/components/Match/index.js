import { connect } from "react-redux";
 
import Match from "./Match";

import { updateScore } from "../../data/actions";

const mapStateToProps = ({ players }, { match }) => { 
    return {
        players: players,
        match: match,
    }; 
};

const mapDispatchToProps = (dispatch) => { 
    return {
        player1Score: (matchId, score) => dispatch(updateScore(matchId, "p1Score", score)),
        player2Score: (matchId, score) => dispatch(updateScore(matchId, "p2Score", score)),
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Match);