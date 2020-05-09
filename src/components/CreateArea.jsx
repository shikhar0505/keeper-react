import React, { useState } from 'react';
import Fab from '@material-ui/core/fab'; // floadting-action-button
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';

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

  const [ isExpanded, setExpanded ] = useState(false);

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        {isExpanded && <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />}

        <textarea name="content" onClick={expand} placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content} onChange={handleChange} />

        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
