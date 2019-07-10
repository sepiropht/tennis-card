import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';


const Div = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  margin-top: 20px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const Container = styled.div`
  padding: 2px 16px
`;

const Card = ({ player }) => (
  <Div>
    <img src={player.picture} alt="Avatar" />
    <Container>
      <h4>
        <b>
          {player.firstname} {player.lastname}
        </b>
      </h4>
      <Stats data={player.data} />
    </Container>
  </Div>
);

const Stats = ({ data }) => (
  <div className="stats">
    <span>Numero°{data.rank} mondial</span>
    <span> {data.points} pts</span>
    <span> {data.weight} kg</span>
    <span> {data.age} ans</span>
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
    return <Cards className="cards">{cards}</Cards>;
  }
}

export default App;
