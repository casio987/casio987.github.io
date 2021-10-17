import { FunctionComponent } from "react";
import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";

const App: FunctionComponent = () => (
	<HashRouter>
		<Navbar/>
		<Routes/>
		<Footer/>
	</HashRouter>
)

export default App;
