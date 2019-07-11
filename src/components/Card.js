import React from 'react';
import styled from '@emotion/styled';
import Stats from './Stats';

const Div = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-family: 'Ubuntu', sans-serif;
  transition: 0.3s;
  background-color: #b8d1ac;
  margin-top: 20px;
  padding: 15px;
  width: 275px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  img {
    border-radius: 5px 5px 0 0;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Aside = styled.div`
  width: 20%;
  img {
    width: 25px;
    height: 15px;
  }
`;

const Card = ({ player }) => (
  <Div>
    <Header>
      <img src={player.picture} alt="Avatar" />
      <Aside>
        <img src={player.country.picture} alt="flag" />
        <LastResult last={player.data.last} />
      </Aside>
    </Header>
    <div>
      <h4>
        <b>
          {player.firstname} {player.lastname}
        </b>
      </h4>
      <Stats data={player.data} />
    </div>
  </Div>
);

const LastResult = ({ last }) => (
  <>
    <h5>Wins</h5>
    <div>{last.filter(res => res === 1).length}</div>
    <h5>Loss</h5>
    <div>{last.filter(res => res === 0).length}</div>
  </>
);

export default Card;
