import React, { Component } from "react";

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            players: [],

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.currentTarget.value,
        });
    }

    handleClick(e) {
        e.preventDefault();

        // will add validation, so names submitted cannot be empty strings etc.

        this.setState({
            players: [...this.state.players, this.state.name],
            name: ""
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        // add players to store
        this.props.handlePlayers(this.state.players);
    }

    render() {
        let { name, players } = this.state;

        return (
            <>
                <form>
                    <label htmlFor="playerName"><h2>Add a Player</h2></label>
                    <input onChange={ (e) => this.handleChange(e) } value={ name } id="playerName" type="text" maxLength="30"></input>
                    <button onClick={ (e) => this.handleClick(e) }>Add 'em</button>
                </form>
                <div>
                    <ul>
                        { players.map((player, index) => (
                            <li key={ index } >{ player }</li>
                        )) }
                    </ul>
                </div>
                <div>
                    <button onClick={ this.handleSubmit }><h2>Start Tournament!</h2></button>
                </div>
            </>
        );
    };
}

export default Settings;