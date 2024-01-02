import { useEffect, useState } from "react";
import PokemonCard2 from "./PokemonCard2";
import "./PokemonApi2.css";

export default () => {
  const [pokemons, setPokemons] = useState([]);
  const [userSearch, setUserSearch] = useState();
  console.log(pokemons);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((obj) => setPokemons(obj.results))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <br />
      <h3>Pokemon API 2</h3>
      <br />
      <h4>Search:</h4>
      <input
        type="text"
        value={userSearch}
        onChange={(e) => setUserSearch(e.target.value)}
      />

      <div className="pokemon-grid">
        {pokemons.map((pok, i) => (
          <PokemonCard2 key={i} namePokemon={pok.name} imgPokemon={pok.url} />
        ))}
      </div>
    </>
  );
};
