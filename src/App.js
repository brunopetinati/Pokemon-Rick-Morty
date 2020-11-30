import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

import { Links, Welcome } from "./styled";
import RickMorty from "./pages/rickmorty/";
import Pokemon from "./pages/pokemon/";
import FavoritePokemon from "./pages/favoritepokemon";
import FavoriteRickandMorty from "./pages/favoriterickandmorty/";

function App() {
  return (
    <>
      <Links>
        <Link to="/rickmorty">Rick and Morty</Link>
        <Link to="/pokemon">Pokémon</Link>
        <Link to="/favoritepokemon">Pokémon favoritos</Link>
        {/* <Link to="/favoriterickandmorty">Rick e Morty Favoritos</Link> */}
      </Links>
      <Switch>
        <Route exact path="/rickmorty">
          <RickMorty />
        </Route>
        <Route exact path="/pokemon">
          <Pokemon />
        </Route>
        <Route exact path="/favoritepokemon">
          <FavoritePokemon />
        </Route>
        {/* <Route exact path="/favoriterickandmorty">
          <FavoriteRickandMorty />
        </Route> */}
        <Welcome>Seja Bem Vindo!</Welcome>
      </Switch>
    </>
  );
}

export default App;
