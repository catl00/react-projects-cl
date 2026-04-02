import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Views/Home';
import Product from './Views/Product';
import Series from './Views/Series';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
            <Router>
        <Header />
        <div className='p-3'>
          <Switch>
            <Route exact path="/"><Home /></Route>
                <Route exact path="/products"><Product /></Route>
                <Route path="/products/:id"><Product /></Route>
                <Route path="/series/:name"><Series /></Route>
            <Route path="*"><h1>404 Not Found</h1></Route>
          </Switch>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
