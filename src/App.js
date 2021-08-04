import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Day 001",
      text: "This is my first note",
      date: "14/5/2021",
      tags: [],
    },
    {
      id: nanoid(),
      title: "Day 002",
      text: "This is my second note",
      date: "15/5/2021",
      tags: [],
    },
    {
      id: nanoid(),
      title: "Day 003",
      text: "This is my third note",
      date: "16/5/2021",
      tags: [],
    },
    {
      id: nanoid(),
      title: "Day 004",
      text: "This is my fourth note",
      date: "17/5/2021",
      tags: [],
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if(savedNotes) {
      setNotes(savedNotes);
    }

  }, []); // empty array runs only on first load

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (name) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: name.title,
      text: name.text,
      date: date.toLocaleDateString(),
      tags: name.tags,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container mx-auto max-w-screen-lg min-h-screen p-4 ">
        <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter(
            (note) =>
              note.title.toLowerCase().includes(searchText.toLowerCase()) ||
              note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
