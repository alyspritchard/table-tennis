import React, { Component } from "react";

import Match from "../Match";

class Round extends Component {
    constructor(props) {
        super(props);

        this.state = { 
			matches: [],
		};

        this.handleMatches = this.handleMatches.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMatches(match) {
        // check if match already exists in state, if not, add it
        if (!this.state.matches.map(stateMatch => stateMatch.id).includes(match.id)) {
            this.setState({
                matches: [...this.state.matches, match]
            });
        // the match already exists in state, so replace it
        } else {
            let matches = this.state.matches.map(stateMatch => (
                stateMatch.id === match.id ? match : stateMatch
            ));

            this.setState({
                matches: matches,
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let { round } = this.props;

        // check a winner has been picked for all matches in this round
        if (this.state.matches.length === this.props.matches.filter(match => match.round === round).length) {
            this.state.matches.forEach(match => this.props.submitScores(match));
            this.props.endRound();
        }
    }

    render() {
        let { round, totalRounds, matches } = this.props;

        return (
            <>
                {/* show which round it is */}
                <h2 className="title">{ round === totalRounds ? "Final" : "Round" + round }</h2>
                
                {/* generate a Match component for each match */}
                { matches.filter(match => match.round === round).map((match, index) => (
                    <Match key={ index } match={ match } handleMatch={ this.handleMatches }/>
                )) }

                { round === totalRounds 
                    ? <button 
                        onClick={ (e) => this.handleWinner(e) }
                        className="nes-btn is-primary"
                    >Confirm Winner</button>
                    : <button 
                        onClick={ (e) => this.handleSubmit(e) }
                        className="nes-btn is-primary"
                    >Next Round</button> }
            </>
        ); 
    }
}

export default Round;