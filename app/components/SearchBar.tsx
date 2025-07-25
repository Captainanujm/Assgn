import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full md:w-[300px]">
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-lg pl-8 pr-6 py-4  text-m border-2 border-gray-500 focus:outline-none"
      />
      <Search className="absolute right-3 top-2.5 h-7 w-7  text-gray-500 m-2 ml-0 mt-1" />
    </div>
  );
};

export default SearchBar;
