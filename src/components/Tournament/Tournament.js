import React from "react";

import Round from "../Round";

const Tournament = ({ totalRounds, roundsPlayed, players, champion, handleNewTournament }) => {
    const rounds = [];
    for (let i = 1; i <= totalRounds; i += 1) {
        rounds.push(<Round round={ i }/>)
    }

    // audio played when bcrikko clicked on
    const handleAudio = () => {
        let a = new Audio("https://themushroomkingdom.net/sounds/wav/smb/smb_1-up.wav");
        a.play();
    }

    // if champion has been chosen, get name
    const championName = champion === -1 ? "" : players[champion].name;

    let championMessage = `Congrats to our champion - ${championName}!! \nHip, hip! Hooray!!`;
    let finalMessage = "Here it is, the final match! No cheating.";
    let roundMessage = `You're currently playing Round ${roundsPlayed + 1}. \nClick on players to select them as the winner for their match. Once you're done click 'Next Round' to move on. \nGood luck everyone!`;

    return (
        <div className="container">
            <section className="container--message message -right">
                <div className="nes-balloon from-right">
                    <p>{ totalRounds === roundsPlayed ? championMessage : roundsPlayed === totalRounds - 1 ? finalMessage : roundMessage }
                    </p>
                </div>
                <i onClick={ handleAudio } className="nes-bcrikko"></i>
            </section>
            
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