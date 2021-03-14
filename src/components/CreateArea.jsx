import React, { useState } from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setIsExpanded] = useState(false);

  function expand() {
    setIsExpanded(!isExpanded);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
            style={{ display: isExpanded ? "block" : "none" }}
          />
        )}

        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />

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