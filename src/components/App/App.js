import React from 'react';

import Settings from "../Settings"
import Tournament from "../Tournament"

const App = ({ inPlay }) => (
  <>
    { !inPlay ? <Settings /> : <Tournament /> }
  </>
);

export default App;
