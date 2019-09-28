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
        <>
            { totalRounds === roundsPlayed ?
                <section className="item--error message -right">
                    <div className="nes-balloon from-right">
                        <p>{`Congrats to our champion ${championName}!! Hip, hip! Hooray!!`}</p>
                    </div>
                    <i className="nes-bcrikko"></i>
                </section> : roundsPlayed === totalRounds - 1 ? 
                <section className="item--error message -right">
                    <div className="nes-balloon from-right">
                    <p>Here it is, the final match! No cheating.</p>
                    </div>
                    <i className="nes-bcrikko"></i>
                </section> 
                : <section className="item--error message -right">
                    <div className="nes-balloon from-right">
                        <p>{`You're currently playing Round ${roundsPlayed + 1}. Good luck everyone!`}</p>
                    </div>
                    <i className="nes-bcrikko"></i>
                </section>
            }
            <div className="container--tournament">
                { rounds.map((round, index) => (
                    <div 
                        key={ index }
                        className="round nes-container is-rounded"
                    >{ round }</div>
                )) }
            </div>
            <div className="container--new">
                <button 
                    onClick={ handleNewTournament }
                    className="nes-btn is-success"
                >New Tournament</button>
            </div>
        </>
    )
};

export default Tournament;