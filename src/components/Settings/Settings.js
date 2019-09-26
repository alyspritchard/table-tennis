import React, { Component } from "react";

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            players: [],
            error: false,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.currentTarget.value,
            error: false,
        });
    }

    handleClick(e) {
        e.preventDefault();
        let name = this.state.name.trim();
        console.log(name);

        // name cannot be empty string or the same as another player
        if (name !== "" && !this.state.players.includes(name)) {
            this.setState({
                players: [...this.state.players, name],
                name: ""
            });
        } else {
            this.setState({
                error: true,
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        // add players to store
        this.props.handlePlayers(this.state.players);
    }

    render() {
        let { name, players, error } = this.state;

        return (
            <>
                <form>
                    <label htmlFor="playerName"><h2>Add a Player</h2></label>
                    <input onChange={ (e) => this.handleChange(e) } value={ name } id="playerName" type="text" maxLength="30"></input>
                    <button onClick={ (e) => this.handleClick(e) }>Add 'em</button>
                    { !error ? null : <p>I need a valid name please! If the person you're trying to add shares their name with someone already playing in the tournament, then they'll just have to change it by deed poll.</p>}
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