import React from 'react';
import styled from '@emotion/styled';

const Stat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Stats = ({ data }) => (
  <Stat>
    <div>
      {' '}
      <strong>Ranking</strong> <span>{data.rank} </span>
    </div>
    <div>
      {' '}
      <strong>Points</strong> <span>{data.points}</span>
    </div>
    <div>
      {' '}
      <strong>Poids</strong> <span>{data.weight / 1000}</span>{' '}
    </div>
    <div>
      {' '}
      <strong>Age</strong> <span>{data.age}</span>
    </div>
  </Stat>
);

export default Stats