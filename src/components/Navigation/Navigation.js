import './Navigation.css';
import { NavLink } from 'react-router-dom';
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
				<NavLink to="/">
					<img src={logo} alt="Navigation__logo" className="logo" />
				</NavLink>
				<img
					src={`${active ? close : hamburger}`}
					alt="navigation icon"
					onClick={handleClick}
					className="toggle"
				/>
			</div>

			<ul className={`Navigation__list ${active ? 'active' : null}`}>
				<li>
					<NavLink exact to="/" activeClassName="active">
						<span className="listNumber">00</span>
						<span className="listText">Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/destination" activeClassName="active">
						<span className="listNumber">01</span>
						<span className="listText">Destination</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/crew" activeClassName="active">
						<span className="listNumber">02</span>
						<span className="listText">Crew</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/technology" activeClassName="active">
						<span className="listNumber">03</span>
						<span className="listText">Technology</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
