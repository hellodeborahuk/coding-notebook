import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Note = ({ id, title, text, date, handleDeleteNote }) => {
  return (
    <div className="Note flex flex-col justify-between bg-green-50 border border-gray-700 rounded-lg shadow-lg">
      <div className="p-4 flex items-center justify-between relative border-b border-gray-700 ">
        <h3 className="font-bold text-green-900">{title}</h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      <div className="p-4">
        <p className="mb-3 text-green-800">{text}</p>
        <div className="flex items-center justify-between note-footer">
          <small className="text-green-900">{date}</small>
          <div className="flex space-x-2">
            <MdEdit className="edit-icon text-green-900" size="1.3em" />
            <MdDeleteForever
              onClick={() => handleDeleteNote(id)}
              className="delete-icon text-green-900 hover:text-green-600 cursor-pointer"
              size="1.3em"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Note;
