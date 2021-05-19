import Nav from './components/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import NewMovies from './components/NewMovies';
import Populars from './components/Populars';
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new-movies" component={NewMovies} />
          <Route path="/populars" component={Populars} />
          <Route path="/search" component={Search} />
        </Switch>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
