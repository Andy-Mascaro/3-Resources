import Main from './Views/Main/Main';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Directors from './Views/Main/Directors/Directors';
import Header from './components/Header/Header';
import Movies from './Views/Movies/Movies';
import Viewers from './Views/Viewers/Viewers';


function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Switch> 
          <Header />
          <Main />
        </Switch>
        <Route exact path="/directors">
          <Directors />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/viewers">
          <Viewers />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
