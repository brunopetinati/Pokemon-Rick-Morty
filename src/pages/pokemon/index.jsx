import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "antd";
import { Title, Flex, List, Footer } from "../../styled";

//fetch

const Pokemon = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150")
      .then((result) => {
        setData(result.data.results);
      });
  }, []);

  //favoritos

  const [favorites, setFavorites] = useState(() => {
    const favoriteList = localStorage.getItem("favoriteList");
    if (favoriteList) {
      return JSON.parse(favoriteList);
    }
    return [];
  });

  const handleData = (name) => {
    console.log(name);
    setFavorites([...favorites, name]);
  };

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favorites));
  }, [favorites]);

  console.log(favorites);

  //paginação

  const [currentPage, setCurrentPate] = useState(1);
  const [postsPerPage] = useState(30);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = data.length;

  const Pagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <nav>
        <Footer>
          {pageNumbers.map((number) => (
            <div key={number}>
              <List onClick={() => paginate(number)} href="#!">
                {number}
              </List>
            </div>
          ))}
        </Footer>
      </nav>
    );
  };

  const paginate = (pageNumber) => setCurrentPate(pageNumber);

  //fim da paginação

  return (
    <>
      <Title>Escolha seus Pokémon preferidos!</Title>
      <Flex>
        {currentPosts.map(({ name, url }) => {
          const brokenUrl = url.split("/");
          const id = brokenUrl[brokenUrl.length - 2];
          return (
            <Card title={name} bordered={true} style={{ width: 255 }}>
              <Button onClick={() => handleData({ name })}>
                select {name}
              </Button>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                width="230px"
                alt={name}
              />
            </Card>
          );
        })}
      </Flex>
      <Pagination />
    </>
  );
};

export default Pokemon;
