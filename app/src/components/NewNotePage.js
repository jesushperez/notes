import React from 'react';
import { Wrapper, InputTitle, InputContent, BackLink, SaveButton } from './PageStyles/NewNotePageStyles';

const NewNotePage = ({onTitleChange, onContentChange, onClick}) => {

  return (
    <Wrapper>
      <BackLink to="/">back</BackLink>

      <InputTitle 
        wrap="soft" 
        placeholder="Type your note title..." 
        onChange={onTitleChange} 
      ></InputTitle>

      <InputContent
        wrap="soft"
        placeholder="Type your note..."
        onChange={onContentChange}
      ></InputContent>

      <SaveButton onClick={onClick}>save</SaveButton>
    </Wrapper>
  );
}

export default NewNotePage;