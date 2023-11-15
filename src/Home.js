import React from "react";
import "./Home.css";
import {useState} from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value.slice(0, 100); // Limitarea la 100 de caractere
    const onlyLetters = /^[A-Za-z]*$/;

    if (inputValue.trim() === "") {
      setError("Campul este obligatoriu.");
    } else if (!onlyLetters.test(inputValue)) {
      setError("Introduceti doar litere.");
    } else {
      setError("");
    }

    setSearchValue(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.trim() === "") {
      setError("Campul este obligatoriu. Introduceti cel putin o litera.");
    } else {
      // Handle your search logic here using the searchValue
      console.log("Search value:", searchValue);
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchValue}
        onChange={handleInputChange}
        maxLength={100} // Numărul maxim de caractere
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Search</button>
    </form>
  );
};

export default Home;
