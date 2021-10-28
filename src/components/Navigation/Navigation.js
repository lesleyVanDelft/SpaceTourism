import './Navigation.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import close from '../../assets/shared/icon-close.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import logo from '../../assets/shared/logo.svg';

const Navigation = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<nav className="Navigation">
			<div className="Navigation__icons">
				<Link to="/">
					<img src={logo} alt="Navigation__logo" className="logo" />
				</Link>
				<img
					src={`${active ? close : hamburger}`}
					alt="navigation icon"
					onClick={handleClick}
					className="toggle"
				/>
			</div>

			<ul className={`Navigation__list ${active ? 'active' : null}`}>
				<li className={'active'}>
					<Link to="/">
						<span className="listNumber">00</span>
						<span className="listText">Home</span>
					</Link>
				</li>
				<li>
					<Link to="/">
						<span className="listNumber">01</span>
						<span className="listText">Destination</span>
					</Link>
				</li>
				<li>
					<Link to="/">
						<span className="listNumber">02</span>
						<span className="listText">Crew</span>
					</Link>
				</li>
				<li>
					<Link to="/">
						<span className="listNumber">03</span>
						<span className="listText">Technology</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
