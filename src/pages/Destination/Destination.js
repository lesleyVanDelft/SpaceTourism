import './Destination.css';
import { destinations } from '../../data.json';
import Navigation from '../../components/Navigation/Navigation';
import { useState } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

const Destination = () => {
	const [active, setActive] = useState('Moon');

	const getActiveState = e => {
		setActive(e.target.innerHTML);
	};

	const variants = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				duration: 0.75,
			},
		},
	};

	return (
		<motion.div
			className="Destination"
			variants={variants}
			initial="hidden"
			animate="show">
			<Navigation />
			<header className="Heading">
				<span className="Heading__number">01</span>
				<span className="Heading__text">Pick your Destination</span>
			</header>

			<main className="Destination__content">
				<div className="planetImg">
					{destinations.map((planet, i) => {
						return planet.name === active ? (
							<img src={planet.images.png} alt="" className="" key={i} />
						) : null;
					})}
				</div>

				<div className="Destination__textContainer">
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

					<h1 className="PlanetTitle">{active}</h1>

					{destinations.map((planet, i) => {
						return planet.name === active ? (
							<p className="BodyText" key={i}>
								{planet.description}
							</p>
						) : null;
					})}

					<div className="TravelInfo">
						<div className="distance">
							<h3>Avg. Distance</h3>
							{destinations.map((planet, i) => {
								return planet.name === active ? (
									<h2 key={i}>{planet.distance}</h2>
								) : null;
							})}
						</div>

						<div className="time">
							<h3>Est. Travel Time</h3>
							{destinations.map((planet, i) => {
								return planet.name === active ? (
									<h2 key={i}>{planet.travel}</h2>
								) : null;
							})}
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default Destination;
