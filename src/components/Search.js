import { MdSearch } from "react-icons/md";
import { useState } from "react";

const Search = ({ notes, handleSearchNote, handleTagFilter }) => {
  const [showTags, setShowTags] = useState(false);

  const onClick = () => {
    setShowTags(!showTags);
    handleTagFilter(null);
  };

  const TagList = () => {
    const tags = notes.reduce((carry, note) => {
      note.tags.forEach((element) => {
        if (!carry.includes(element)) {
          carry.push(element);
        }
      });
      return carry;
    }, []);
    return (
      <div className="flex flex-wrap">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className="bg-green-600 text-green-50 py-1 px-2 mr-1 mb-2  rounded-lg"
              onClick={() => handleTagFilter(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <div className="container mx-auto flex items-center bg-gray-200 rounded-lg p-2 ">
          <MdSearch className="" size="1.3em" />
          <input
            onChange={(event) => handleSearchNote(event.target.value)}
            type="text"
            placeholder="Type to search..."
            className="bg-gray-200 lg:w-1/2"
          />
        </div>
        <button
          onClick={onClick}
          className="rounded-lg px-5 py-1 bg-green-600 text-green-50"
        >
          Filter
        </button>
      </div>
      <div className="mb-6">{showTags ? <TagList /> : null}</div>
    </div>
  );
};

export default Search;
