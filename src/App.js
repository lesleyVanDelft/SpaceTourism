import './App.css';
// import Navigation from './components/Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/destination" exact component={Destination} />
				<Route path="/crew" exact component={Crew} />
			</Switch>
		</div>
	);
}

export default App;
