import Note from "./Note";

const NotesList = ({ notes }) => {
  return (
    <div className="NotesList lg:grid grid-cols-3 gap-6 space-y-8 lg:space-y-0">
      {notes.map((note) => (
        <Note id={note.id} title={note.title} text={note.text} date={note.date} />
      ))}
    </div>
  );
};

export default NotesList;
