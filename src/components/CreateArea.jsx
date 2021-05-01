import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setIsExpanded] = useState(false);

  function expand(expand) {
    setIsExpanded(expand);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    expand(false);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          onChange={handleChange}
          onClick={() => expand(true)}
          name="title"
          placeholder="Title"
          value={note.title}
        />

        {isExpanded && (
          <textarea
            onChange={handleChange}
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
            value={note.content}
            style={{ display: isExpanded ? "block" : "none" }}
          />
        )}

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
