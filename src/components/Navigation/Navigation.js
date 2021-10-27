import './Navigation.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import close from '../../assets/shared/icon-close.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';

const Navigation = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<nav className="Navigation">
			<img
				src={`${active ? close : hamburger}`}
				alt="navigation icon"
				onClick={handleClick}
				className="Navigation__icons"
			/>
			<ul className={`Navigation__list ${active ? 'active' : null}`}>
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
