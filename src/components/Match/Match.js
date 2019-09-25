import React, { Component } from "react";

class Match extends Component {
    constructor(props) {
        super(props);

        this.handlePlayer1 = this.handlePlayer1.bind(this);
        this.handlePlayer2 = this.handlePlayer2.bind(this);
    }

    handlePlayer1() {
        let { match } = this.props;
        
        // need to add validation - should only run if this round is in play
        
        // update redux store - player1 score to 1, player2 score to 0
        this.props.player1Score(match.id, 1);
        this.props.player2Score(match.id, 0);
    }

    handlePlayer2() {
        let { match } = this.props;
        
        // need to add validation - should only run if this round is in play

        // update redux store - player2 score to 1, player1 score to 0
        this.props.player1Score(match.id, 0);
        this.props.player2Score(match.id, 1);
    }

    render() {
        let { players, match } = this.props;

        let player1 = players[match.player1];
        let player2 = players[match.player2];

        return (
            <div>
                <button 
                    onClick={ this.handlePlayer1 }
                    // this isn't doing any actual styling yet - if scores are equal both players highlighted amber, else green if winning/red if losing
                    className={ match.p1Score === match.p2Score ? "amber" : match.p1Score > match.p2Score ? "green" : "red" }
                >{ player1 === undefined ? "?" : player1.name }</button>

                <button 
                    onClick={ this.handlePlayer2 }
                    // this isn't doing any actual styling yet - if scores are equal both players highlighted amber, else green if winning/red if losing
                    className={ match.p1Score === match.p2Score ? "amber" : match.p1Score < match.p2Score ? "green" : "red" }
                >{ player2 === undefined ? "?" : player2.name }</button>
            </div>
        );
    };
}

export default Match;