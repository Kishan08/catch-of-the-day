import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
	render() {
		//this destructuring in ES6, if confused check vid-16@9:00
		const { details, index } = this.props,
					isAvailable = details.status === 'available',
					buttonText = isAvailable ? 'Add to Order' : 'Sold Out';
		return (
			<li className="menu-fish">
				<img src={details.image} alt={details.name} />
				<h3 className="fish-name">
					{details.name}
					<span className="price">
						{formatPrice(details.price)}
					</span>
				</h3>
				<p>{details.desc}</p>
				{/* if it's not available then disable the dutton */}
				<button disabled={!isAvailable} onClick={() => this.props.addToOrder(index)}>{buttonText}</button>
			</li>
		);
	}
}

Fish.propTypes = {
	details: React.PropTypes.object.isRequired,
	index: React.PropTypes.string.isRequired,
	addToOrder: React.PropTypes.func.isRequired,
};

export default Fish;