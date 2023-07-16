import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal';

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg} show={props.show}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
         <u><p>{props.description}</p></u>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{props.leftBtnText}</LeftButton>
            {props.rightBtnText && <RightButton>{props.rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
     
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};

  p{
    margin-bottom: 45px;
  }
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  color: #fff;
  u{
    padding:10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgb(0, 0, 0);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 0.55;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
 cursor :pointer;

`;

