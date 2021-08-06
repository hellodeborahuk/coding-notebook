import { useEffect, useState } from "react";

function Tag({ updateTags, clearTags }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags([]);
    console.log(clearTags);
  }, [clearTags]);

  useEffect(() => {
    updateTags(tags);
    // eslint-disable-next-line
  }, [tags]);

  const addTag = (event) => {
    if (event.key === "Enter") {
      if (event.target.value.length > 0) {
        setTags([...tags, event.target.value]);

        event.target.value = "";
      }
    }
  };
  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  return (
    <div>
      <div className="flex flex-wrap ">
        {tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="bg-green-600 text-green-50 py-1 px-2 mr-1 rounded-lg"
            >
              {tag}{" "}
              <span
                className="cursor-pointer font-bold text-yellow-500"
                onClick={() => removeTag(tag)}
              >
                x
              </span>
            </div>
          );
        })}
      </div>
      <input
        onKeyDown={addTag}
        placeholder="Add a tag..."
        className="bg-gray-200 mt-2 rounded-lg pl-2 p-1"
      />
    </div>
  );
}

export default Tag;
