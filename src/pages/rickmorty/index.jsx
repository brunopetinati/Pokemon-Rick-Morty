import { useState, useEffect } from "react";
import { Card } from "antd";
import { Title, Flex, List, Footer } from "../../styled";

const RickMorty = () => {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  const [currentPage, setCurrentPate] = useState(1);
  const [postsPerPage] = useState(30);

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
              <span />
            </div>
          ))}
        </Footer>
      </nav>
    );
  };

  const [favorites, setFavorites] = useState([]);

  const handleData = (name) => {
    console.log(name);
    setFavorites([...favorites, name]);
    console.log(favorites);
  };

  useEffect(() => {
    localStorage.setItem("favoriteList", favorites);
  }, [favorites]);

  const paginate = (pageNumber) => setCurrentPate(pageNumber);
  return (
    <>
      <Title>Escolha seus personagens favoritos de Rick and Morty!</Title>
      <Flex>
        {currentPosts.map((data, index) => (
          <Card title={data.name} bordered={true} style={{ width: 255 }}>
            <img src={data.image} width="200px" onClick={() => handleData} />
          </Card>
        ))}
      </Flex>
      <Pagination />
    </>
  );
};

export default RickMorty;
