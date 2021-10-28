import './App.css';
// import Navigation from './components/Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</div>
	);
}

export default App;
