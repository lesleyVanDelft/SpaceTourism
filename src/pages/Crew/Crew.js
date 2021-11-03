import './Crew.css';
import { crew } from '../../data.json';
import { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { useSwipeable } from 'react-swipeable';
const Crew = () => {
	const [active, setActive] = useState(0);

	const getActiveState = e => {
		setActive(e.target.value);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => {
			return active < 3 ? setActive(active + 1) : setActive(0);
		},
		onSwipedRight: () => {
			return active === 0 ? setActive(3) : setActive(active - 1);
		},
		delta: 10,
		preventDefaultTouchmoveEvent: true,
	});

	return (
		<div className="Crew" {...handlers}>
			<Navigation />
			<header className="Heading">
				<span className="Heading__number">02</span>
				<span className="Heading__text">Meet your crew</span>
			</header>

			<main className="Crew__content">
				<div className="image">
					{crew.map((member, i) => {
						return active === i ? (
							<img src={member.images.png} key={i} alt="" />
						) : null;
					})}
				</div>

				<div className="text">
					{crew.map((member, i) => {
						return active === i ? (
							<div key={i} className="text__content">
								<h3 className="HeadingSm">{member.role}</h3>
								<h2 className="HeadingMd">{member.name}</h2>
								<p className="BodyText">{member.bio}</p>
							</div>
						) : null;
					})}

					<ul className="slider">
						<li
							className={`slider__indicator ${active === 0 ? 'active' : null}`}
							value="0"
							onClick={getActiveState}>
							<span></span>
						</li>
						<li
							className={`slider__indicator ${active === 1 ? 'active' : null}`}
							value="1"
							onClick={getActiveState}>
							<span></span>
						</li>
						<li
							className={`slider__indicator ${active === 2 ? 'active' : null}`}
							value="2"
							onClick={getActiveState}>
							<span></span>
						</li>
						<li
							className={`slider__indicator ${active === 3 ? 'active' : null}`}
							value="3"
							onClick={getActiveState}>
							<span></span>
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
};

export default Crew;
