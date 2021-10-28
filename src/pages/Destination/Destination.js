import './Destination.css';
import { destinations } from '../../data.json';
import Navigation from '../../components/Navigation/Navigation';
import { useState } from 'react';

const Destination = () => {
	const [active, setActive] = useState('Moon');

	return (
		<div className="Destination">
			<Navigation />
			<div className="Heading">
				<span className="Heading__number">01</span>
				<span className="Heading__text">Pick your Destination</span>
			</div>
			<div className="Destination__planetNames">
				<ul>
					<li>Moon</li>
					<li>Mars</li>
					<li>Europa</li>
					<li>Titan</li>
				</ul>
			</div>
			{destinations.map((planet, i) => {
				{
				}
			})}
			;
		</div>
	);
};

export default Destination;
