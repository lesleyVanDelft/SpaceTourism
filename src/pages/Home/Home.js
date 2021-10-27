import './Home.css';
import Navigation from '../../components/Navigation/Navigation';
import hamburger from '../../assets/shared/icon-hamburger.svg';

const Home = () => {
	return (
		<div className="Home">
			<Navigation />
			<img src={hamburger} alt="Hamburger icon" className="hamburger" />
			<h1>Hello.</h1>
		</div>
	);
};

export default Home;
