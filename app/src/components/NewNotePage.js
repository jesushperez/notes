import React from 'react';
import { Wrapper, InputTitle, InputContent, BackLink, SaveButton } from './PageStyles/NewNotePageStyles';

const NewNotePage = () => {


  return (
    <Wrapper>
      <BackLink to="/">back</BackLink>

      <InputTitle 
        wrap="soft" 
        placeholder="Type your note title..." 
      ></InputTitle>

      <InputContent
        wrap="soft"
        placeholder="Type your note..."
      ></InputContent>

      <SaveButton>save</SaveButton>
    </Wrapper>
  );
}

export default NewNotePage;