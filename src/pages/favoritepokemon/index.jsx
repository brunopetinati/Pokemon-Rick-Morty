import { Title, Welcome, Reset } from "../../styled";
import { motion } from "framer-motion";
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons";

const FavoritePokemon = () => {
  let favoritelist = JSON.parse(localStorage.getItem("favoriteList"));
  console.log(favoritelist);
  <DeleteOutlined />;
  if (favoritelist) {
    return (
      <>
        <Title>
          Confira a lista de seus pokémon preferidos!
          <HeartOutlined style={{ marginLeft: "16px" }} />
        </Title>
        <Welcome>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            {favoritelist.map(({ name }) => (
              <div>
                {name}
                <br />
              </div>
            ))}
          </motion.div>
        </Welcome>
        <Reset
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Limpar listas <DeleteOutlined style={{ marginLeft: "16px" }} />
        </Reset>
      </>
    );
  }

  return <Welcome>Sua lista está limpa!</Welcome>;
};

export default FavoritePokemon;
