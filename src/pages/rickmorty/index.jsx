/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */

import { useState, useEffect } from "react";
import { Card } from "antd";
import { Title, Flex, List, Footer } from "../../styled";

const RickMorty = (favorites, setFavorites) => {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  useEffect(() => {
    const getCharacter = () => {
      if (nextUrl) {
        fetch(nextUrl)
          .then((res) => res.json())
          .then((body) => {
            setData([...data, ...body.results]);
            setNextUrl(body.info.next);
          });
      }
    };
    getCharacter();
  }, [nextUrl]);

  const totalPosts = data.length;
  const [currentPage, setCurrentPate] = useState(1);
  const [postsPerPage] = useState(30);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

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
              <span />
            </div>
          ))}
        </Footer>
      </nav>
    );
  };

  const [favoritesRM, setFavoritesRM] = useState(() => {
    const favoriteRM = localStorage.getItem("favoriteRM");
    if (favoriteRM) {
      return JSON.parse(favoriteRM);
    }
    return [];
  });

  const handleData = (name) => {
    console.log(name);
    setFavoritesRM([...favoritesRM, name]);
  };

  useEffect(() => {
    localStorage.setItem("favoriteRM", JSON.stringify(favoritesRM));
  }, [favoritesRM]);

  const paginate = (pageNumber) => setCurrentPate(pageNumber);
  return (
    <>
      <Title>Escolha seus personagens favoritos!</Title>
      <Flex>
        {currentPosts.map((data, index) => (
          <Card
            title={data.name}
            bordered={true}
            style={{ width: 255 }}
            onClick={() => handleData(data.name)}
          >
            <img src={data.image} width="200px" />
          </Card>
        ))}
      </Flex>
      <Pagination />
    </>
  );
};

export default RickMorty;
