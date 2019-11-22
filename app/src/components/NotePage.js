import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontBody, primary } from './Variables';

const NotePage = ({note}) => {

  const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 15px;
  `;

  const BackLink = styled(Link)`
    color: #FFFFFF;
    padding: 8px;
    text-decoration: none;
    font-family: ${fontBody};
    background-color: ${primary};
    border-radius: 5px;
    border: 2px solid ${primary};
    margin-right: 5px;
    display: inline-block;
    box-shadow: 0 0 2px #aaaaaa;
    font-size: .9rem;
    transition-duration: .2s;

    &:hover {
      cursor: pointer;
      background-color: #FFFFFF;
      color: ${primary};
    }
  `;

  const NoteTitle = styled.textarea`
    border: none;
    background-color: transparent;
    color: black;
    font-size: 2rem;
    background-color: none;
    display: block;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin-top: 50px;
    margin-bottom: 25px;
    resize: none;
    min-height: 2em;

    &:hover {
      outline: none;
    }
  `;

  const NoteContent = styled.textarea`
    resize: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    color: black;
    background-color: transparent;
    border: none;
    font-weight: 300;
    line-height: 1.5;
    outline: none;

    &:hover {
      outline: none;
    }
  `;

  const SaveButton = styled.button`
    color: #FFFFFF;
    padding: 8px;
    text-decoration: none;
    font-family: ${fontBody};
    background-color: ${primary};
    border-radius: 5px;
    border: 2px solid ${primary};
    margin-right: 5px;
    margin-top: 25px;
    display: inline-block;
    box-shadow: 0 0 2px #aaaaaa;
    font-size: .9rem;
    transition-duration: .2s;

    &:hover {
      cursor: pointer;
      background-color: #FFFFFF;
      color: ${primary};
    }
  `;

  return(
    <Wrapper>
      <BackLink className="note-page__back-btn" to="/">back</BackLink>

      <NoteTitle 
        wrap="soft" 
        defaultValue={note.title}
      ></NoteTitle>

      <NoteContent
        wrap="soft"
        defaultValue={note.content}
      ></NoteContent>

      <SaveButton 
        className="note-page__save-btn"
        data-id={note.id}
      >Save</SaveButton>

    </Wrapper>
  );
}

export default NotePage;