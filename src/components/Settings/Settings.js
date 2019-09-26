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
            <div className="container">
                <form className="item-a nes-container with-title">
                    <h2 className="title">Add a Player</h2>
                    <label htmlFor="playerName">Name</label>
                    <input 
                        onChange={ (e) => this.handleChange(e) } 
                        value={ name } id="playerName" 
                        type="text" 
                        maxLength="30"
                        placeholder="Princess Peach"
                    ></input>
                    
                    <button 
                        className="nes-btn is-primary" 
                        onClick={ (e) => this.handleClick(e) }
                    >Add 'em</button>

                    { !nameError ? null : <p>I need a valid name please! If the person you're trying to add shares their name with someone already playing in the tournament, then they'll just have to change it by deed poll.</p>}
                </form>

                <div className="item-b nes-container with-title">
                    <h2 className="title">Your Fighters</h2>
                    <ul>
                        { players.map((player, index) => (
                            <li key={ index } >{ player }</li>
                        )) }
                    </ul>
                    { !playersError ? null : <p>You need a minimum of 4 players, and the number also needs to be a power of 2! Don't ask me why, maths isn't my strong suit...</p> }
                </div>

                <div className="item-c">
                    <button className="nes-btn is-primary" onClick={ this.handleStart }><h2>Start Tournament!</h2></button>
                </div>
            </div>
        );
    };
}

export default Settings;