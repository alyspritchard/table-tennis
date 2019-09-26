import React, { Component } from "react";

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            players: [],
            nameError: false,
            playersError: false

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleStart = this.handleStart.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.currentTarget.value,
            nameError: false,
            playersError: false,
        });
    }

    handleClick(e) {
        e.preventDefault();
        let name = this.state.name.trim();

        // name cannot be empty string or the same as another player
        if (name !== "" && !this.state.players.includes(name)) {
            this.setState({
                players: [...this.state.players, name],
                name: ""
            });
        } else {
            this.setState({
                nameError: true,
            });
        }
    }

    handleStart(e) {
        e.preventDefault();

        let { players } = this.state;

        if (players.length >= 4 && Number.isInteger(Math.log2(players.length))) {
            this.props.handlePlayers(players);
        } else {
            this.setState({
                playersError: true,
            });
        }
    }

    render() {
        let { name, players, nameError, playersError } = this.state;

        return (
            <>
                <form>
                    <label htmlFor="playerName"><h2>Add a Player</h2></label>
                    <input onChange={ (e) => this.handleChange(e) } value={ name } id="playerName" type="text" maxLength="30"></input>
                    <button onClick={ (e) => this.handleClick(e) }>Add 'em</button>
                    { !nameError ? null : <p>I need a valid name please! If the person you're trying to add shares their name with someone already playing in the tournament, then they'll just have to change it by deed poll.</p>}
                </form>
                <div>
                    <ul>
                        { players.map((player, index) => (
                            <li key={ index } >{ player }</li>
                        )) }
                    </ul>
                    { !playersError ? null : <p>You need a minimum of 4 players, and the number also needs to be a power of 2! Don't ask me why, maths isn't my strong suit...</p> }
                </div>
                <div>
                    <button onClick={ this.handleStart }><h2>Start Tournament!</h2></button>
                </div>
            </>
        );
    };
}

export default Settings;