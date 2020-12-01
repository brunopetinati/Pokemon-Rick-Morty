import { Title, Welcome, Reset } from "../../styled";

const FavoriteRickandMorty = () => {
  let favoriteRM = JSON.parse(localStorage.getItem("favoriteRM"));
  console.log(favoriteRM);

  if (favoriteRM) {
    return (
      <>
        <Title>
          Confira a lista de seus personagens preferidos de Rick e Morty!
        </Title>
        <Welcome>
          {favoriteRM.map((name) => (
            <div>{name}</div>
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

export default FavoriteRickandMorty;
