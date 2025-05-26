import { useState } from "react";
import { SearchContext } from "./SearchContext";
import SearchBox from "./SearchBox";
import List from "./List";

export default function UseFilter30() {
  const [query, setQuery] = useState("");
  const items = ["apple,banana", "orange", "mango"];

  return (
    <div>
      <SearchContext.Provider value={{ query, setQuery, items }}>
        <SearchBox />
        <List />
      </SearchContext.Provider>
    </div>
  );
}
