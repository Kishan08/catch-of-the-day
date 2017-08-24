import React, { Component } from 'react';
import { formatPrice } from '../helpers';
import CSStransitionGroup from 'react-addons-css-transition-group';

class Order extends Component {

	constructor() {
		super();
		this.renderOrder = this.renderOrder.bind(this);
	}

	renderOrder(key) {
		const fish = this.props.fishes[key],
					count = this.props.order[key],
					removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button> 
		if(!fish && fish.status === 'unavailable'){
			return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available {removeButton}</li>
		}

		return (
			<li key={key}>
				<span>
					<CSStransitionGroup
						component="span"
						className="count"
						transitionName="count"
						transitionEnterTimeout={250}
						transitionLeaveTimeout={250}
					>
						<span key={count}>{count}</span>
					</CSStransitionGroup>
					kg {fish.name} {removeButton}
				</span>
				<span className="price">
					{formatPrice(count * fish.price)}
				</span>
			</li>
		);
	}

	render() {
		//check vid-17 for more info.
		const orderIds = Object.keys(this.props.order),
					total = orderIds.reduce((prevTotal, key) => {
						const fish = this.props.fishes[key],
									count = this.props.order[key], //how many they buy
									isAvailable = fish && fish.status === 'available';
						if(isAvailable) {
							return prevTotal + (count * fish.price || 0)
						}
						return prevTotal
					}, 0);
		return(
			<div className="order-wrap">
				<h2>Your Order</h2>
				<CSStransitionGroup 
					className="order"
					component="ul"
					transitionName="order"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					{orderIds.map(this.renderOrder)}
					<li className="total">
						<strong>Total:</strong>
						{formatPrice(total)}
					</li>
				</CSStransitionGroup>
			</div>
		);
	}
}

Order.propTypes = {
	fishes: React.PropTypes.object.isRequired,
	order: React.PropTypes.object.isRequired,
	removeFromOrder: React.PropTypes.func.isRequired
};

export default Order;