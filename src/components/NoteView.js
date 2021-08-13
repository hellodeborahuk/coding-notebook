
function NoteView({note}) {

return (
  <>
    <div className="p-4 flex items-center justify-between relative border-b border-green-700">
      <h3 className="font-bold text-green-900">{note.title}</h3>
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </div>

    <div className="p-4 flex-grow flex-col">
      <p className="mb-3 text-green-800">{note.text}</p>
      <div className="flex flex-wrap">
        {note.tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="bg-green-600 text-green-50 py-1 px-2 mr-1 mb-2  rounded-lg"
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  </>
);
}

export default NoteView;