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
      title: "Day 003",
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

  return (
    <div className="container mx-auto max-w-screen-lg p-4">
      <NotesList notes={notes}/>
    </div>
  );
};

export default App;
