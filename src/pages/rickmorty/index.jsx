import { useState, useEffect } from "react";
import { Card, Pagination } from "antd";
import { Title, Flex } from "../../styled";
import axios from "axios";

const RickMorty = () => {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  const [currentPage, setCurrentPate] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(30);

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

  return (
    <>
      <Title>Escolha seus personagens favoritos de Rick and Morty!</Title>

      <Flex>
        {currentPosts.map((data, index) => (
          <Card title={data.name} bordered={true} style={{ width: 255 }}>
            <img src={data.image} width="200px" />
          </Card>
        ))}
      </Flex>
      <Pagination
        defaultCurrent={currentPage}
        defaultPageSize={postsPerPage}
        total={data.length}
        onClick={console.log("clicou")}
      />
    </>
  );
};

export default RickMorty;
