import React from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 30%;
  background-color: #d1b3ac;
  margin-top: 20px;
  padding: 10px;
  min-width: 250px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  img {
    border-radius: 5px 5px 0 0;
  }
  
`;
const Container = styled.div`
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

const Stat = styled.div`
   display: flex;
   flex-direction: row;
`
const Stats = ({ data }) => (
  <Stat>
    <div> <strong>Rkg</strong> <span>{data.rank} </span></div>
    <div> <strong>Pts ATP</strong> <span>{data.points}</span></div>
    <div> <strong>Poids</strong> <span>{data.weight}</span> </div>
    <div> <strong>Age</strong> <span>{data.age}</span></div>
  </Stat>
);

export default Card;