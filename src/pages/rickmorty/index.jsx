import { useState, useEffect } from "react";
import { Card, Pagination } from "antd";
import { Title, Flex } from "../../styled";
import axios from "axios";

const RickMorty = () => {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  console.log(data);
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

  return (
    <>
      <Title>Escolha seus personagens favoritos de Rick and Morty!</Title>

      <Flex>
        {data.map((data, index) => (
          <Card title={data.name} bordered={true} style={{ width: 255 }}>
            <img src={data.image} width="200px" />
          </Card>
        ))}
      </Flex>
      <Pagination defaultCurrent={1} defaultPageSize={10} total={data.length} />
    </>
  );
};

export default RickMorty;
