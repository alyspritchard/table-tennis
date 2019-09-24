import React from "react";

import Match from "../Match";

const Round = ({ round, totalRounds, matches }) => (
    <div>
        {/* show which round it is */}
        <h2>{ round === totalRounds ? "Final" : "Round" + round }</h2>

        {/* get the matches just for this round, and generate a Match component for each */}
        { matches.filter(match => match.round === round).map(match => (
            <Match match={ match }/>
        )) }
    </div>
); 

export default Round;