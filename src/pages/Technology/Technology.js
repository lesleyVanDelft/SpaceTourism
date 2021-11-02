import { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { technology } from '../../data.json';
import './Technology.css';

const Technology = () => {
	const [active, setActive] = useState(0);

	const getActiveState = e => {
		setActive(e.target.value);
	};

	return (
		<div className="Technology">
			<Navigation />
			<header className="Heading">
				<span className="Heading__number">03</span>
				<span className="Heading__text">Space Launch 101</span>
			</header>

			<main className="Technology__content">
				<div className="image">
					{technology.map((tech, i) => {
						return active === i ? (
							<img src={tech.images.landscape} alt="" className="img" />
						) : null;
					})}
				</div>

				<div className="text">
					<ul className="numberList">
						<li
							value="0"
							className={`${active === 0 ? 'active' : null}`}
							onClick={getActiveState}>
							1
						</li>
						<li
							value="1"
							className={`${active === 1 ? 'active' : null}`}
							onClick={getActiveState}>
							2
						</li>
						<li
							value="2"
							className={`${active === 2 ? 'active' : null}`}
							onClick={getActiveState}>
							3
						</li>
					</ul>

					<h4 className="Heading">The Terminology...</h4>
					{technology.map((tech, i) => {
						return active === i ? (
							<div className="text__content">
								<h3 className="HeadingMd">{tech.name}</h3>
								<p className="BodyText">{tech.description}</p>
							</div>
						) : null;
					})}
				</div>
			</main>
		</div>
	);
};

export default Technology;
