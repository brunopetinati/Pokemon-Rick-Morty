import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card } from "antd";
import { Title, Flex } from "../../styled";

const Pokemon = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150")
      .then((result) => {
        setData(result.data.results);
      });
  }, []);

  return (
    <Flex>
      {Data.map(({ name, url }) => {
        const brokenUrl = url.split("/");
        const id = brokenUrl[brokenUrl.length - 2];
        return (
          <Card>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt={name}
            />
            <p>{name}</p>
          </Card>
        );
      })}
    </Flex>
  );
};

export default Pokemon;
