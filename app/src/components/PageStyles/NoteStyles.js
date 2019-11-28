import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primary, secondary, fontTitle, fontBody, customBlack, customWhite } from '../Variables';

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

const ViewButton = styled(Link)`
  color: ${customWhite};
  transition-duration: .3s;
  border: 2px solid ${primary};
  background-color: ${primary};
  flex-grow: 3;
  padding: 6px;
  text-align: center;
  text-decoration: none;
  margin-top: auto;
  font-family: ${fontBody};

  &:hover {
    cursor: pointer;
    color: ${primary};
    background-color: ${customWhite};
  }
`;

const DeleteButton = styled.button`
  color: ${customWhite};
  transition-duration: .3s;
  border: 2px solid ${secondary};
  background-color: ${secondary};
  flex-grow: ${1};
  padding: 8px;
  text-align: center;
  text-decoration: none;
  margin-top: auto;
  font-family: ${fontBody};

  &:hover {
    cursor: pointer;
    color: ${secondary};
    background-color: ${customWhite};
  }
`;

export { Wrapper, Title, Content, ButtonsWrapper, ViewButton, DeleteButton };