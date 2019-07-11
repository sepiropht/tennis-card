import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Card from './components/Card';


function App() {
  const [isLoaded, setLoad] = useState(false);
  const [players, setPlayer] = useState([]);
  const [error, setError] = useState(null);

   
  useEffect(() => {
    fetch('/headtohead.json')
      .then(result => result.json())
      .then(json => {
        setPlayer(json.players);
        setLoad(true);
      })
      .catch(err => {
        setError(err);
        setLoad(true);
      });
  }, []);

  const cards = players.map((player, index) => (
    <Card key={index} player={player} />
  ));

  const Cards = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  `
  if (error) {
    return <div> Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading cards..</div>;
  } else {
    return <Cards>{cards}</Cards>;
  }
}

export default App;
