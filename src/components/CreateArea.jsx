import React, { useState } from 'react';

function CreateArea(props) {
  const defaultNote = {
    key: "",
    title: "",
    content: ""
  };

  const [ note, setNote ] = useState(defaultNote);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function submitNote(event) {
    if (!isEmptyOrSpaces(note.title) && !isEmptyOrSpaces(note.content)) {
      props.onAdd(note);
      setNote(defaultNote);
    }
    event.preventDefault();
  }

  function isEmptyOrSpaces(str) {
    return !str || (str && str.trim() === "");
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
