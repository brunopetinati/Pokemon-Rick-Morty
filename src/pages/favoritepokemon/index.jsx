import { Flex, Title, Welcome } from "../../styled";
import { Card, Button } from "antd";

const FavoritePokemon = () => {
  const favoritelist = localStorage.getItem("favoriteList");

  return (
    <>
      <Title>Confira a lista de seus pokémon preferidos!</Title>
      <Welcome>{favoritelist}</Welcome>
    </>
  );
};

export default FavoritePokemon;
