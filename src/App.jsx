import { useState } from "react";
import SearchResultList from "./SearchResultList";

export default function App() {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex-column-center-gap" method="GET">
        <label htmlFor="">What do you need done?</label>
        <div>
          <input placeholder="I want to.." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit">Search</button>
        </div>
      </form>
      <div className="results flex-column-center-gap">
        <SearchResultList search={search}></SearchResultList>
      </div>
    </>
  );
}
