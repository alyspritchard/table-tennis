import { connect } from "react-redux";
 
import Tournament from "./Tournament";

import { newTournament } from "../../data/actions";

const mapStateToProps = ({ totalRounds }) => { 
    return {
        totalRounds: totalRounds,
    }; 
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleNewTournament: () => dispatch(newTournament())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);