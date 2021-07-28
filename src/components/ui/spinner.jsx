import React from 'react';
import styled from 'styled-components/macro';

const Layout = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function Spinner(props) {
  const { width, height, fill } = props;
  return (
    <Layout>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={width} height={height}>
        <circle transform="translate(8 0)" cx="0" cy="16" r="0" fill={fill}>
          <animate
            attributeName="r"
            values="0; 4; 0; 0"
            dur="1.2s"
            repeatCount="indefinite"
            begin="0"
            keyTimes="0;0.2;0.7;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="translate(16 0)" cx="0" cy="16" r="0" fill={fill}>
          <animate
            attributeName="r"
            values="0; 4; 0; 0"
            dur="1.2s"
            repeatCount="indefinite"
            begin="0.3"
            keyTimes="0;0.2;0.7;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="translate(24 0)" cx="0" cy="16" r="0" fill={fill}>
          <animate
            attributeName="r"
            values="0; 4; 0; 0"
            dur="1.2s"
            repeatCount="indefinite"
            begin="0.6"
            keyTimes="0;0.2;0.7;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
            calcMode="spline"
          />
        </circle>
      </svg>
    </Layout>
  );
}

Spinner.defaultProps = {
  fill: 'rgba(0, 0, 0, 0.85)',
  width: 48,
};

export default Spinner;
