import React from 'react';
import { styled } from 'styled-components';

type PB_Props = {
  gauge: number;
};

const Prograssbar: React.FC<PB_Props> = ({ gauge }) => {
  return (
    <PB_Container>
      <div className="box"></div>
      <div className="gauge" style={{ width: gauge + '%' }}></div>
    </PB_Container>
  );
};

const PB_Container = styled.header`
  width: 100%;
  max-width: 475px;
  background-color: white;
  border-radius: 6px;
  position: absolute;
  top: 0;

  .box {
    box-shadow: 0 7px 0 #eee;
  }
  .gauge {
    transition: cubic-bezier(0.42, 0, 0.05, 0.98) 0.5s;
    height: 12px;
    background-color: #8e32ff;
    border-radius: 6px;
  }
`;

export default Prograssbar;
