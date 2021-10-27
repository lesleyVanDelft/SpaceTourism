import './Navigation.css';
import { Link } from 'react-router-dom';
import close from '../../assets/shared/icon-close.svg';

const Navigation = () => {
	const handleClick = () => {};

	return (
		<nav className="Navigation">
			<ul className="Navigation__list">
				<img src={close} alt="close icon" className="close" />
				<li>
					<Link to="/">
						<span className="listNumber">00</span>Home
					</Link>
				</li>
				<li>
					<Link to="/">
						<span className="listNumber">01</span>Destination
					</Link>
				</li>
				<li>
					<Link to="/">
						<span className="listNumber">02</span>Crew
					</Link>
				</li>
				<li>
					<Link to="/">
						<span className="listNumber">03</span>Technology
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
