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
                { playersError ?
                    <section className="container--message message -right">
                        <div className="nes-balloon from-right">
                            <p>Don't forget what I said! You need a minimum of 4 players, and the number of players also needs to be a power of 2! Don't ask me why, maths isn't my strong suit...</p>
                        </div>
                        <i className="nes-bcrikko"></i>
                    </section> 
                : nameError ? 
                    <section className="container--message message -right">
                        <div className="nes-balloon from-right">
                            <p>I need a valid name please! If the person you're trying to add, shares their name with someone already playing in the tournament, then they'll just have to change it by deed poll.</p>
                        </div>
                        <i className="nes-bcrikko"></i>
                    </section> 
                : 
                    <section className="container--message message -right">
                        <div className="nes-balloon from-right">
                            <p>Welcome! To create your tournament you'll need a minimum of 4 players, and the total number of players needs to be a power of 2 (i.e. 4, 8, 16, 32 ...)</p>
                        </div>
                        <i className="nes-bcrikko"></i>
                    </section> 
                }
                <div className="container--grid">
                    <form className="add nes-container is-rounded">
                        <h2 className="title--container">Add a Player</h2>
                        <div className="nes-field is-inline">
                            <label htmlFor="playerName">Name</label>
                            <input 
                                onChange={ (e) => this.handleChange(e) } 
                                value={ name } id="playerName" 
                                type="text" 
                                maxLength="30"
                                placeholder="Princess Peach"
                                className={`nes-input ${nameError ? "error" : null}`}
                            ></input>
                        </div>
                        <button 
                            className="nes-btn is-success" 
                            onClick={ (e) => this.handleClick(e) }
                        >Add 'em</button>
                    </form>

                    <div className="players lists nes-container is-rounded">
                        <h2 className="title--container">Who's Playing?</h2>
                        <p>So you don't forget...</p>
                        <ul className="nes-list is-disc">
                            { players.map((player, index) => (
                                <li key={ index } >{ player }</li>
                            )) }
                        </ul>
                    </div>
                </div>


                <div className="container--button">
                    <button className="big-btn nes-btn is-success" onClick={ this.handleStart }>Start Tournament!</button>
                </div>
            </div>
        );
    };
}

export default Settings;