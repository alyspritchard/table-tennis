import { connect } from "react-redux";
 
import Match from "./Match";

// import { updateScore } from "../../data/actions";

const mapStateToProps = ({ players, roundsPlayed }, { match, handleMatch }) => { 
    return {
        players: players,
        match: match,
        roundsPlayed: roundsPlayed,
        handleMatch: handleMatch,
    }; 
};

// const mapDispatchToProps = (dispatch) => { 
//     return {
//         player1Score: (matchID, score) => dispatch(updateScore(matchID, "p1Score", score)),
//         player2Score: (matchID, score) => dispatch(updateScore(matchID, "p2Score", score)),
//     }; 
// };

export default connect(mapStateToProps)(Match);