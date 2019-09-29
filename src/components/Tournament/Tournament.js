import React from "react";

import Round from "../Round";

const Tournament = ({ totalRounds, roundsPlayed, players, champion, handleNewTournament }) => {
    const rounds = [];
    for (let i = 1; i <= totalRounds; i += 1) {
        rounds.push(<Round round={ i }/>)
    }

    // if champion has been chosen, get name
    const championName = champion === -1 ? "" : players[champion].name;

    return (
        <div className="container">
            { totalRounds === roundsPlayed ?
                <section className="container--message message -right">
                    <div className="nes-balloon from-right">
                        <p>{`Congrats to our champion - ${championName}!! \nHip, hip! Hooray!!`}</p>
                    </div>
                    <i className="nes-bcrikko"></i>
                </section> : roundsPlayed === totalRounds - 1 ? 
                <section className="container--message message -right">
                    <div className="nes-balloon from-right">
                    <p>Here it is, the final match! No cheating.</p>
                    </div>
                    <i className="nes-bcrikko"></i>
                </section> 
                : <section className="container--message message -right">
                    <div className="nes-balloon from-right">
                        <p>{`You're currently playing Round ${roundsPlayed + 1}. \nClick on players to select them as the winner for their match. Once you're done click 'Next Round' to move on. \nGood luck everyone!`}</p>
                    </div>
                    <i className="nes-bcrikko"></i>
                </section>
            }
            <div className="container--grid">
                { rounds.map((round, index) => (
                    <div 
                        key={ index }
                        className="round nes-container is-rounded"
                    >{ round }</div>
                )) }
            </div>

            <div className="container--button">
                <button 
                    onClick={ handleNewTournament }
                    className="big-btn nes-btn is-success"
                >New Tournament</button>
            </div>
        </div>
    )
};

export default Tournament;