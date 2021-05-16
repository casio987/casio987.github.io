import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
		<Navbar/>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About}/>
		</Switch>
      </Router>

    </div>
  );
}

export default App;
