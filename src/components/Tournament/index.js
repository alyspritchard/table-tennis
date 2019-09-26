import { connect } from "react-redux";
 
import Tournament from "./Tournament";

const mapStateToProps = ({ totalRounds }) => { 
    return {
        totalRounds: totalRounds,
    }; 
};

export default connect(mapStateToProps)(Tournament);