import React from "react";

import Round from "../Round";

const Tournament = ({ totalRounds, handleNewTournament }) => {
    const rounds = [];

    for (let i = 1; i <= totalRounds; i += 1) {
        rounds.push(<Round round={ i }/>)
    }

    return (
        <div className="container--tournament">
            { rounds.map((round, index) => (
                <div 
                    key={ index }
                    className={`nes-container with-title item-${index}`}
                >{ round }</div>
            )) }

            <div className="button--new-tournament">
                <button 
                    onClick={ handleNewTournament }
                    className="nes-btn is-primary button"
                >New Tournament</button>
            </div>
            
        </div>
    )
};

export default Tournament;