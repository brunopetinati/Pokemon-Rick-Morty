import { Flex, Title, Welcome } from "../../styled";
import { Card, Button } from "antd";

const FavoriteRickandMorty = () => {
  const favoritelist = localStorage.getItem("favoriteList");

  return (
    <>
      <Title>
        Confira a lista de seus personagens preferidos de Rick and Morty!
      </Title>
      <Welcome>{favoritelist}</Welcome>
    </>
  );
};

export default FavoriteRickandMorty;
