import Note from "./Note";
import NoteForm from "./NoteForm";

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="NotesList lg:grid grid-cols-3 gap-6 space-y-8 lg:space-y-0">
      <NoteForm handleAddNote={handleAddNote} />
      {notes.map((note) => (
        <Note note={note} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} />
      ))}
    </div>
  );
};

export default NotesList;
