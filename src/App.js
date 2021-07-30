import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Day 001",
      text: "This is my first note",
      date: "14/5/2021",
    },
    {
      id: nanoid(),
      title: "Day 002",
      text: "This is my second note",
      date: "15/5/2021",
    },
    {
      id: nanoid(),
      title: "Day 003",
      text: "This is my third note",
      date: "16/5/2021",
    },
    {
      id: nanoid(),
      title: "Day 004",
      text: "This is my fourth note",
      date: "17/5/2021",
    },
  ]);

  const addNote = (name) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: name.title,
      text: name.text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
  }

  return (
    <div className="container mx-auto max-w-screen-lg p-4">
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
  );
};

export default App;
