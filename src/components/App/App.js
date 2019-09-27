import React from 'react';

import Header from "../Header/Header";
import Settings from "../Settings"
import Tournament from "../Tournament"

const App = ({ inPlay }) => (
  <>
    <Header />
    { !inPlay ? <Settings /> : <Tournament /> }
  </>
);

export default App;
