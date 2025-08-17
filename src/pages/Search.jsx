
import SearchBar from "../components/SearchBar";
import useChatGPTSearch from "../hooks/useChatGPTSearch";


const Search = () => {
   const [result, search] = useChatGPTSearch();
  return (
    <div>
      <SearchBar onSearch={search} />
      {result && <div>{result}</div>}
    </div>
  );
}

export default Search
