import { connect } from "react-redux";
 
import App from "./App";

const mapStateToProps = ({ inPlay }) => { 
    return {
        inPlay: inPlay,
    }; 
};

export default connect(mapStateToProps)(App);