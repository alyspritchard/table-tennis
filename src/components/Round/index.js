import { connect } from "react-redux";
 
import Round from "./Round";

const mapStateToProps = ({ matches, players }, { round }) => { 
    return { 
        round: round,
        matches: matches.filter(match => match.round === round),
        totalRounds: Math.log2(players.length),
    }; 
};

export default connect(mapStateToProps)(Round);