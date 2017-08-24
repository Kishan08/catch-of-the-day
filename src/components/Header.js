import React from 'react';

const Header = (prop) => {
	return (
		<header className="top">
			<h1>
				catch 
				<span className="ofThe">
					<span className="of">of</span>
					<span className="the">the</span>
				</span>
				day
			</h1>
			<h3 className="tagline"><span>{prop.tagline}</span></h3>
		</header>
	);
}

//for validation of prop types
Header.propTypes = {
	tagline: React.PropTypes.string.isRequired
};

export default Header;