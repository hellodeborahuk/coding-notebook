import { MdSearch } from "react-icons/md";

const Search = ({handleSearchNote}) => {
  return (
    <div className="container mx-auto flex items-center bg-gray-200 rounded-lg p-2 mb-6">
      <MdSearch className="" size="1.3em" />
      <input onChange={(event =>handleSearchNote(event.target.value))} type="text" placeholder="Type to search..." className="bg-gray-200 lg:w-1/2" />
    </div>
  );
};

export default Search;
