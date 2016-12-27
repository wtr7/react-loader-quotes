import styled, { keyframes } from 'styled-components';

const setContainer = ({ loading }) => {
  const display = !loading ? 'none' : 'inline-block';

  return styled.div`
    position: fixed;
    left: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    z-index: 99999;
    display: ${display}
  `;
};

const setBackground = ({ backgroundColorBackground, opacityBackground }) => {
  return styled.div`
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${backgroundColorBackground};
    opacity: ${opacityBackground};
  `;
};

const setQuotes = ({ backgroundColorQuotes }) => {
  return styled.div`
    position: relative;
    top: 50%;
    display: inline-block;
    width: auto;
    height: auto;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    background-color: ${backgroundColorQuotes};
    transform: translateY(-50%);
    z-index: 999999;
  `;
};

const setTitle = ({ fontSizeTitle, colorTitle, fontFamilyTitle }) => {
  return styled.p`
    text-align: center;
    font-family: ${fontFamilyTitle};
    font-size: ${fontSizeTitle};
    padding: 10px;
    color: ${colorTitle};
    margin-bottom: 0px;
  `;
};

const transition = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

const setLoader = ({ speed, backgroundColorLoader }) => {
  return styled.div`
    position: absolute;
    width: 0%;
    height: 5px;
    background-color: ${backgroundColorLoader};
    bottom: 0px;
    animation: ${transition} ${speed}s ease-out infinite;
  `;
};

export {
  setContainer,
  setBackground,
  setQuotes,
  setTitle,
  setLoader
};
