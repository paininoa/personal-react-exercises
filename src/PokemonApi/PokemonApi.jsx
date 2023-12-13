import { useState, useEffect } from "react";
import "./PokemonApi.css";
import PokemonCard from "./PokemonCard";

export default () => {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const [isSearching, setIsSearching] = useState(false);

  // FATTO IO- ALTERNATIVA
  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon")
  //     .then((response) => response.json())
  //     .then((obj) => {
  //       console.log(obj.results);
  //       setPokemons(obj.results);
  //     });
  // }, []);

  // CON CLAUDIO
  // useEffect(() => {
  //   async function fetchPokemons() {
  //     const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  //     const json = await response.json();
  //     setPokemons(json.results);
  //   }
  //   fetchPokemons();
  // }, []);

  // COME SOPRA MA SENZA NOME PERCHè CHIAMIAMO LA FUNZIONE DIRETTAMENTE
  useEffect(() => {
    (async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const json = await response.json();
      setPokemons(json.results);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (query === "") {
        setSearchResult();
        setErrorMessage("");
        return;
      }
      setIsSearching(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query}`
      );

      setIsSearching(false);
      if (!response.ok) {
        setErrorMessage("Not Found");
        return;
      }
      const json = await response.json();
      setSearchResult(json);
      setErrorMessage("");
    })();
  }, [query]);

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setQuery(searchTerm)}>Search</button>

      <p>{errorMessage}</p>
      <p>{isSearching ? "Loading" : ""}</p>

      {searchResult ? (
        <PokemonCard namePokemon={searchResult.name} />
      ) : (
        pokemons.map((item, index) => {
          return (
            <PokemonCard key={`Pokemon ${index}`} namePokemon={item.name} />
          );
        })
      )}
    </>
  );
};
