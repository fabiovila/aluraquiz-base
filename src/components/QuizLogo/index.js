import styled from 'styled-components';
import React from 'react';
import Link from '../Link';

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
    <div><QuizImg><Link href="/"><img src="/100.png" alt="" /></Link></QuizImg></div>
  );
}
export default QuizLogo;
