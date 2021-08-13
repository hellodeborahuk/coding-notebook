import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [tagFilter, setTagFilter] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
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

const editNote = (data) => {
  let tmp = [...notes];
  const index = tmp.findIndex((note) => note.id === data.id);
  if (index > -1) {
    tmp.splice(index, 1, data);
    setNotes(tmp);
  }
}

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const searchTagFilter = (note) => {
    if (tagFilter !== null) {
      return note.tags.includes(tagFilter);
    }

    return true;
  };

  const searchTextFilter = (note) => {
    if (searchText !== "") {
      return (
        note.title.toLowerCase().includes(searchText.toLowerCase()) ||
        note.text.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return true;
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container mx-auto max-w-screen-lg min-h-screen p-4 ">
        <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode} />
        <Search
          handleSearchNote={setSearchText}
          handleTagFilter={setTagFilter}
          notes={notes}
        />
        <NotesList
          notes={notes.filter(searchTagFilter).filter(searchTextFilter)}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
        />
      </div>
    </div>
  );
};

export default App;
