import { Title, Welcome, Reset } from "../../styled";
import { motion } from "framer-motion";
import { DeleteOutlined, SmileOutlined } from "@ant-design/icons";

const FavoriteRickandMorty = () => {
  let favoriteRM = JSON.parse(localStorage.getItem("favoriteRM"));
  console.log(favoriteRM);

  if (favoriteRM) {
    return (
      <>
        <Title>
          Confira a lista de seus personagens preferidos de Rick e Morty!
          <SmileOutlined style={{ marginLeft: "16px" }} />
        </Title>
        <Welcome>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            {favoriteRM.map((name) => (
              <div>{name}</div>
            ))}
          </motion.div>
        </Welcome>
        <Reset
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Limpar listas
          <DeleteOutlined style={{ marginLeft: "16px" }} />
        </Reset>
      </>
    );
  }
  return <Welcome>Sua lista está limpa!</Welcome>;
};

export default FavoriteRickandMorty;
