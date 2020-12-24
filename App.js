import React, { useEffect } from "react";
import "./styles.css";
import List from "./List";
import axios from "axios";

export default function App() {
  const [list, setList] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("pasta");

  function handleSearch() {
    if (searchQuery !== "") {
      apiCall();
    }
  }

  function apiCall() {
    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=74287437b52f4fe69cede624e7f77a29`;
    axios
      .get(API_URL)
      .then((res) => setList(res.data.results))
      .catch((res) => console.log(res));
  }

  useEffect(apiCall, []);

  return (
    <div className="App">
      <h1>Reciepe App</h1>
      <div>
        <input
          type="text"
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <List list={list} />
    </div>
  );
}
