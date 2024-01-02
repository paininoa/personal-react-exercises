export default ({ namePokemon, imgPokemon }) => {
  return (
    <div className="card">
      <figure>
        <img src={imgPokemon} />
      </figure>
      <h3>{namePokemon}</h3>
    </div>
  );
};
