import Nav from './components/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Home from './components/Home';
import NewMovies from './components/NewMovies';
import Populars from './components/Populars';
import Search from './components/Search';
import Footer from './components/Footer';
import { theme } from './styles/theme';

import MoreInfo from './components/MoreInfoMovie';
import Person from './components/Person';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0
  }
  a {
    text-decoration: none;
    color: #000
  }
  body {
    font-family: "Calibri";
    overflow-x: hidden;
  }

`

function App() {
  return (
    <div >
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new-movies/page/:num" component={NewMovies} />
            <Route path="/populars/page/:num" component={Populars} />
            <Route path="/search" component={Search} />
            <Route path="/movie/:id/:section" component={MoreInfo} />
            <Route path="/person/:id/:section" component={Person} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
