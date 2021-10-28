import './Destination.css';
import { destinations } from '../../data.json';
import Navigation from '../../components/Navigation/Navigation';
import { useState } from 'react';

const Destination = () => {
	const [active, setActive] = useState('Moon');

	const getActiveState = e => {
		setActive(e.target.innerHTML);
	};

	return (
		<div className="Destination">
			<Navigation />
			<div className="Heading">
				<span className="Heading__number">01</span>
				<span className="Heading__text">Pick your Destination</span>
			</div>

			<div className="planetImg">
				{destinations.map((planet, i) => {
					return planet.name === active ? (
						<img src={planet.images.png} alt="" className="" key={i} />
					) : null;
				})}
			</div>

			<div className="Destination__planetNames">
				<ul>
					<li
						onClick={getActiveState}
						className={`${active === 'Moon' ? 'active' : null}`}>
						Moon
					</li>
					<li
						onClick={getActiveState}
						className={`${active === 'Mars' ? 'active' : null}`}>
						Mars
					</li>
					<li
						onClick={getActiveState}
						className={`${active === 'Europa' ? 'active' : null}`}>
						Europa
					</li>
					<li
						onClick={getActiveState}
						className={`${active === 'Titan' ? 'active' : null}`}>
						Titan
					</li>
				</ul>
			</div>
			{/* {destinations.map((planet, i) => {
				{
				}
			})} */}
		</div>
	);
};

export default Destination;
