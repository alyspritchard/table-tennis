import { connect } from "react-redux";
 
import Match from "./Match";

// import { updateScore } from "../../data/actions";

const mapStateToProps = ({ players, roundsPlayed, matches }, { match, handleMatch, submitted }) => { 
    return {
        players: players,
        roundsPlayed: roundsPlayed,
        match: matches[match.id],
        handleMatch: handleMatch,
        submitted: submitted,
    }; 
};

// const mapDispatchToProps = (dispatch) => { 
//     return {
//         player1Score: (matchID, score) => dispatch(updateScore(matchID, "p1Score", score)),
//         player2Score: (matchID, score) => dispatch(updateScore(matchID, "p2Score", score)),
//     }; 
// };

export default connect(mapStateToProps)(Match);