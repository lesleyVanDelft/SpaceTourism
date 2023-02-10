import { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { technology } from '../../data.json';
import { useSwipeable } from 'react-swipeable';
import { useMediaQuery } from 'react-responsive';
import './Technology.css';

const Technology = () => {
	const [active, setActive] = useState(0);

	const desktopScreen = useMediaQuery({
		query: '(min-width: 1200px)',
	});

	const getActiveState = e => {
		setActive(e.target.value);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => {
			return active < 2 ? setActive(active + 1) : setActive(0);
		},
		onSwipedRight: () => {
			return active === 0 ? setActive(2) : setActive(active - 1);
		},
		delta: 10,
		preventDefaultTouchmoveEvent: true,
	});

	return (
		<div className="Technology" {...handlers}>
			<Navigation />
			<header className="Heading">
				<span className="Heading__number">03</span>
				<span className="Heading__text">Space Launch 101</span>
			</header>

			<main className="Technology__content">
				<div className="image">
					{desktopScreen &&
						technology.map((tech, i) => {
							return active === i ? (
								<img
									src={tech.images.portrait}
									className="imgPortrait"
									key={i}
									alt="Images related to space launches in portrait"
								/>
							) : null;
						})}

					{desktopScreen ||
						technology.map((tech, i) => {
							return active === i ? (
								<img
									src={tech.images.landscape}
									key={i}
									className="img"
									alt="Images related to space launches in landscape"
								/>
							) : null;
						})}

					{/* {technology.map((tech, i) => {
						// return active === i && desktopScreen === false ? (
						// 	<img src={tech.images.landscape} alt="" className="img" key={i} />
						// ) : (
						// 	<img
						// 		src={tech.images.portrait}
						// 		alt=""
						// 		className="imgPortrait"
						// 		key={i}
						// 	/>
						// );
					})} */}
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

					<div>
						<h4 className="Heading">The Terminology...</h4>
						{technology.map((tech, i) => {
							return active === i ? (
								<div className="text__content" key={i}>
									<h3 className="HeadingMd">{tech.name}</h3>
									<p className="BodyText">{tech.description}</p>
								</div>
							) : null;
						})}
					</div>
				</div>
			</main>
		</div>
	);
};

export default Technology;
