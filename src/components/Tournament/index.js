import { connect } from "react-redux";
 
import Tournament from "./Tournament";

const mapStateToProps = ({ players }) => { 
    return {
        totalRounds: Math.log2(players.length),
    }; 
};

export default connect(mapStateToProps)(Tournament);