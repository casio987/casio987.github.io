import { FunctionComponent } from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";

const App: FunctionComponent = () => (
	<HashRouter>
		{/* <Navbar/> */}
		<Routes/>
	</HashRouter>
)

export default App;
