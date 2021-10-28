import './Home.css';
import Navigation from '../../components/Navigation/Navigation';

const Home = () => {
	return (
		<div className="Home">
			<Navigation />

			<div className="Home__content">
				<div className="text">
					<h2>So, you want to travel to</h2>
					<h1>SPACE</h1>
					<p>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<button className="cta">Explore</button>
			</div>
		</div>
	);
};

export default Home;
