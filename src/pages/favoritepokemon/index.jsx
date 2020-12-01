import { Title, Welcome, Reset } from "../../styled";

const FavoritePokemon = () => {
  let favoritelist = JSON.parse(localStorage.getItem("favoriteList"));
  console.log(favoritelist);

  if (favoritelist) {
    return (
      <>
        <Title>Confira a lista de seus pokémon preferidos!</Title>
        <Welcome>
          {favoritelist.map(({ name }) => (
            <div>
              {name}
              <br />
            </div>
          ))}
        </Welcome>
        <Reset
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Limpar listas
        </Reset>
      </>
    );
  }

  return <Welcome>Sua lista está limpa!</Welcome>;
};

export default FavoritePokemon;
