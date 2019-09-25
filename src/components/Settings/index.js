import { connect } from "react-redux";
 
import Settings from "./Settings";
import { addPlayers } from "../../data/actions";

const mapDispatchToProps = (dispatch) => { 
    return {
        handlePlayers: (players) => dispatch(addPlayers(players)),
    }; 
};

export default connect(null, mapDispatchToProps)(Settings);