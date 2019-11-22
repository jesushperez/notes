import styled from 'styled-components';
import { primary, fontTitle, fontBody, customBlack } from '../Variables';

const Wrapper = styled.div`
  background-color: #FFFFFF;
  padding: 8px;
  border-radius: 3%;
  border-top: 8px solid ${primary};
  box-shadow: 0 0 5px #E0E0E0;
  flex-basis: 49%;
  color: #333;
  line-height: 1.4;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;  

  &:nth-child(odd) {
    margin-right: 1%;
  }

  &:nth-child(even) {
    margin-left: 1%;
  }

  @media screen and (min-width: 700px) {
    flex-basis: 32%;

    &:nth-child(odd) {
      margin-right: 0;
    }
    
    &:nth-child(even) {
      margin-left: 0;
    }

    &:nth-child(3n-1) {
      margin-left: 1%;
      margin-right: 1%;
    }
  }
`;

const Title = styled.h3`
  color: ${customBlack};
  font-family: ${fontTitle};
  font-size: 1.1rem;
  margin: 8px 0 0;
  padding-right: 20px;
`;

const Content = styled.p`
  color: ${customBlack};
  font-family: ${fontBody};
  margin: 8px 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: auto;
`;

export {Wrapper, Title, Content, ButtonsWrapper};