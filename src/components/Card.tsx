import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
  border-radius: 7px;
  color: #4a5b9a;
  padding: 25px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
`;

function Card(props: any) {
  return <CardStyled {...props} />;
}

export default Card;
