import { useState } from "react";
import Tag from "./Tag";

const AddNote = ({ handleAddNote }) => {
  const [data, setData] = useState({ title: "", text: "", tags: [] });
  const [saveCounter, setSaveCounter] = useState(0);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const updateTags = (tags) => {
    setData({...data, tags});
  }

  const handleSaveClick = () => {
    if (data.title.trim().length > 0 && data.text.trim().length > 0) {
      handleAddNote(data);
      setData({ title: "", text: "", tags: [] }); // reset data to new object
      setSaveCounter(saveCounter +1);
    } 
  };

  return (
    <div className="Note flex flex-col justify-between border bg-white border-green-700 rounded-lg shadow-lg">
      <div className="p-4 flex items-center justify-between relative border-b border-green-700 ">
        <input
          type="text"
          placeholder="Enter title..."
          className="text-green-900 font-bold"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      <div className="p-4">
        <textarea
          className="w-full text-green-800"
          placeholder="Type to add a note..."
          name="text"
          value={data.text}
          onChange={handleChange}
        ></textarea>
        <div>
          <Tag updateTags={updateTags} clearTags={saveCounter} />
        </div>
        <div className="flex justify-end note-footer">
          <button
            onClick={handleSaveClick}
            className="rounded-2xl px-3 py-1 bg-green-600 hover:bg-green-900 transition duration-500 text-green-50"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
