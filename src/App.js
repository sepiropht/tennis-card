import React, { useState, useEffect } from 'react';

const Card = ({ player }) => (
  <div>
    <p>{JSON.stringify(player)}</p>
  </div>
);

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

  if (error) {
    return <div> Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading cards..</div>;
  } else {
    return <div className="card">{cards}</div>;
  }
}

export default App;
