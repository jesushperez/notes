import styled from 'styled-components';
import { fontTitle, customBlack } from '../Variables';

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  align-items: stretch;
`;

const FeedTitle = styled.h2`
  font-family: ${fontTitle};
  color: ${customBlack};
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-top: 35px;
  padding-left: 15px;
`;

export { ListWrapper, FeedTitle };