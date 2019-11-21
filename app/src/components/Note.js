import React from 'react';
import { primary, secondary } from './Variables';
import { Wrapper, Title, Content, ButtonsWrapper} from './PageStyles/NoteStyles';
import FeedButton from './reusable/FeedButton';

const Note = ({note}) => {

  // Truncates body content of long notes to keep note previews short
  let content = note.content;
  if (content !== undefined) {
    if(content.length > 100)
      content = content.substring(0, 99) + '...';
  }

  return (
    <Wrapper>
      <Title>{note.title}</Title>
      <Content>{content}</Content>
      <ButtonsWrapper>
        <FeedButton 
          btnColor={primary} 
          flexGrow='3' 
          tabIndex={0}>View</FeedButton>
        <FeedButton 
          btnColor={secondary} 
          flexGrow='1' 
          tabIndex={0}>X</FeedButton>
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default Note;