import styled from 'styled-components';
import React from 'react';

const QuizImg = styled.div`
  margin: auto;
  display: block;
  text-align: center;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

function QuizLogo() {
  return (
    <div><QuizImg><a href="/"><img src="/100.png" alt="" /></a></QuizImg></div>
  );
}
export default QuizLogo;
