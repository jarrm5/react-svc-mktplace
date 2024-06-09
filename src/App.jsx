import { useState } from "react";
import SearchResultList from "./SearchResultList";

const services = [
  {
    company: "Bob Hamilton Heating and Cooling",
    tags: ["heating","cooling","hvac"]
  },
  {
    company: "Eden Tree Service",
    tags: ["lawncare","tree pruning"]
  }
];


export default function App() {

  const[search,setSearch] = useState("");

  return (
    <>
    <form method="GET">
      <div>
        <label htmlFor="">What do you need done?</label><input placeholder="I want to.." type="text" />
      </div>
      <button type="submit">Search</button>
    </form>
    <div className="results">
      <SearchResultList></SearchResultList>
    </div>
    </>
  )
}

