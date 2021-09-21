import { Switch, Route } from 'react-router-dom';
import Form from './Components/Form';
import PokeSearch from './Components/PokeSearch'
import TypeChart from './Components/TypeChart';
import NavBar from './NavBar';
import Footer from './Footer';
import './App.css';

const App = ()=> {
  return (
    <div id="app">
      <NavBar />
      <Switch>

        <Route exact path="/Form">
        <Form />
        </Route>

        <Route exact path="/PokeSearch">
        <PokeSearch />
        </Route>

        <Route exact path="/TypeChart">
        <TypeChart />
        </Route>
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
