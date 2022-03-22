import Main from './Views/Main/Main';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Directors from './Views/Main/Directors/Directors';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Switch> 
          <Header />
          <Main />
        </Switch>
        <Route exact path="/Directors">
          <Directors />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
