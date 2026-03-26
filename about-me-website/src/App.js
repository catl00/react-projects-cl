// import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className='p-3'>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="*"><h1>404 Not Found</h1></Route>
          </Switch>
        </div>
        
        <Footer />
      </Router>
      {/* <CounterExample /> */}
    </div>
  );
}

export default App;
