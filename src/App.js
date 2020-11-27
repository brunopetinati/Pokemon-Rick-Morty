import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import RickMorty from "./pages/rickmorty/";
import Pokemon from "./pages/pokemon/";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/rickmorty">
          <RickMorty />
        </Route>
        <Route exact path="/pokemon">
          <Pokemon />
        </Route>
      </Switch>
      <Link to="/rickmorty">Rick and Morty</Link>
      <Link to="/pokemon">Pokémon</Link>
    </>
  );
}

export default App;
