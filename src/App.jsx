import { useState } from "react";
import SearchResultList from "./SearchResultList";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <form className="flex-column-center-gap" method="GET">
        <label htmlFor="">What do you need done?</label>
        <div>
          <input placeholder="I want to.." type="text" />
          <button type="submit">Search</button>
        </div>
      </form>
      <div className="results flex-column-center-gap">
        <SearchResultList></SearchResultList>
      </div>
    </>
  );
}
