import React from "react";

import Round from "../Round";

const Tournament = ({ totalRounds, handleNewTournament }) => {
    const rounds = [];

    for (let i = 1; i <= totalRounds; i += 1) {
        rounds.push(<Round round={ i }/>)
    }

    return (
        <>
            <div className="container--tournament">
                { rounds.map((round, index) => (
                    <div 
                        key={ index }
                        className={`container--round nes-container is-rounded item-${index}`}
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