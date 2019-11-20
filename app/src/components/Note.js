import React from 'react';

const Note = ({note}) => {

  // Truncates body content of long notes to keep note previews short
  let content = note.content;
  if (content !== undefined) {
    if(content.length > 100)
      content = content.substring(0, 99) + '...';
  }

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Note;