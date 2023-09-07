import React, { useState } from 'react';
import { styled } from 'styled-components';

function Dots() {
  const [step, setStep] = useState(2);
  return (
    <Container>
      {Array.from({ length: 4 }, (_, i) => (
        <Dot key={i} color={i < step ? '#FFA000' : '#D9D9D9'} />
      ))}
    </Container>
  );
}

export default Dots;

const Container = styled.div`
  display: flex;
  gap: 13px;
`;

const Dot = ({ color = '#D9D9D9' }: { color: string }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="5" r="5" fill={color} />
    </svg>
  );
};
