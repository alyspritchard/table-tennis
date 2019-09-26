import React, { Component } from "react";

class Match extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winner: 0,
        }

        this.handlePlayer1 = this.handlePlayer1.bind(this);
        this.handlePlayer2 = this.handlePlayer2.bind(this);
    }

    handlePlayer1() {
        let { match, roundsPlayed } = this.props;

        if (match.round - 1 === roundsPlayed) {
            let updatedMatch = {
                ...match, 
                p1Score: 1, 
                p2Score: 0,
            };
            // pass match object up to Round component
            this.props.handleMatch(updatedMatch);
            this.setState({ winner: 1 });
        }   
    }

    handlePlayer2() {
        let { match, roundsPlayed } = this.props;

        if (match.round - 1 === roundsPlayed) {
            let updatedMatch = {
                ...match, 
                p1Score: 0, 
                p2Score: 1,
            };
            // pass match object up to Round component
            this.props.handleMatch(updatedMatch);
            this.setState({ winner: 2 });
        }  
    }

    render() {
        let { players, match } = this.props;
        let { winner } = this.state;

        let player1 = players[match.player1];
        let player2 = players[match.player2];

        let p1Win = winner === 0 ? null : winner === 1 ? "success" : "error";
        let p2Win = winner === 0 ? null : winner === 2 ? "success" : "error";

        return (
            <div className="container--match">
                <button 
                    onClick={ this.handlePlayer1 }
                    // this isn't doing any actual styling yet - if scores are equal both players highlighted amber, else green if winning/red if losing
                    className={ `button-match nes-btn is-${p1Win}` }
                >{ player1 === undefined ? "?" : player1.name }</button>

                <button 
                    onClick={ this.handlePlayer2 }
                    // this isn't doing any actual styling yet - if scores are equal both players highlighted amber, else green if winning/red if losing
                    className={ `button--match nes-btn is-${p2Win}` }
                >{ player2 === undefined ? "?" : player2.name }</button>
            </div>
        );
    };
}

export default Match;