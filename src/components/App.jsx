import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(id) {
    console.log("delete was triggered");
    setNotes(notes.filter((note, i) => i !== id));
  }

  return <div>
    <Header />
    <CreateArea onAdd={addNote} />
    <div className="notes">
      {notes.map((note, i) => <Note key={i} id={i} title={note.title} content={note.content} onDelete={deleteNote} />)}
    </div>
    <Footer />
  </div>;
};

export default App;