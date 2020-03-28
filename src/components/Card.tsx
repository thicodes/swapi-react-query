import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
  background: #282c50;
  border-radius: 22px;
  color: #fff;
  padding: 25px;
`;

function Card(props: any) {
  return <CardStyled {...props} />;
}

export default Card;
