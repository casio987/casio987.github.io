import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Error from './pages/Error';


function App() {
	return (
		<div className="App">
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/personal-website/" component={Home} />
					<Route exact path="/about" component={About}/>
					<Route exact path="/projects" component={Projects}/>
					<Route component={Error}/>
				</Switch>
			</Router>
			<Footer/>
		</div>
	);
}

export default App;
