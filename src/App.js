import Header from './components/Header/Header' 
import Articles from './components/Articles/Articles'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './About'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/' exact={true}>
            <Articles />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
