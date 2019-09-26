import React from "react";

import Round from "../Round";

const Tournament = ({ totalRounds, handleNewTournament }) => {
    const rounds = [];

    for (let i = 1; i <= totalRounds; i += 1) {
        rounds.push(<Round round={ i }/>)
    }

    return (
        <>
            { rounds.map((round, index) => (
                <div key={ index }>
                    { round }
                </div>
            )) }

            <button onClick={ handleNewTournament }>New Tournament</button>
        </>
    )
};

export default Tournament;