import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card, Button, Pagination } from "antd";
import { Title, Flex } from "../../styled";

const Pokemon = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150")
      .then((result) => {
        setData(result.data.results);
      });
  }, [data]);

  return (
    <>
      <Title>Escolha seus Pokémon preferidos!</Title>
      <Flex>
        {data.map(({ name, url }) => {
          const brokenUrl = url.split("/");
          const id = brokenUrl[brokenUrl.length - 2];
          return (
            <Card title={name} bordered={true} style={{ width: 255 }}>
              <Button onClick={console.log({ name })}>select {name}</Button>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={name}
              />
            </Card>
          );
        })}
        <Pagination
          defaultCurrent={1}
          defaultPageSize={10}
          total={data.length}
        />
      </Flex>
    </>
  );
};

export default Pokemon;
