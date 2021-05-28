import Nav from './components/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Home from './components/Home';
import NewMovies from './components/NewMovies';
import Populars from './components/Populars';
import Search from './components/Search';
import Footer from './components/Footer';
import { theme } from './styles/theme';
import InfoBox from './components/InfoBox';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0
  }
  a {
    text-decoration: none
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
            <Route path="/new-movies" component={NewMovies} />
            <Route path="/populars" component={Populars} />
            <Route path="/search" component={Search} />
            <Route path="/movies/:id" component={InfoBox} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
