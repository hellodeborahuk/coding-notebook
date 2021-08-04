import Note from "./Note";
import AddNote from "./AddNote";


const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="NotesList lg:grid grid-cols-3 gap-6 space-y-8 lg:space-y-0">
      <AddNote handleAddNote={handleAddNote}/>
      {notes.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          tags={note.tags}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  );
};

export default NotesList;
