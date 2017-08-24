import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
// import base from '../base';

class Inventory extends Component {

	constructor() {
		super();

		this.renderInventory = this.renderInventory.bind(this);
		this.handleChange = this.handleChange.bind(this);
		// this.renderLogin = this.renderLogin.bind(this);
		// this.authenticate = this.authenticate.bind(this);
		// this.authHandler = this.authHandler.bind(this);

		// this.state = {
		// 	uid: null,
		// 	owner: null
		// };
	}

	// renderLogin() {
	// 	return (
	// 		<nav className="login">
	// 			<h2>Inventory</h2>
	// 			<p>Sign in to manage your inventory</p>
	// 			<button className="github" onClick={() => {this.authenticate('github')}}>
	// 				Log In with Github
	// 			</button>
	// 		</nav>
	// 	);
	// }

	// authenticate(provider) {
	// 	base.authWithOAuthPopup(provider, this.authHandler)
	// }

	// authHandler(err, authData) {
	// 	console.log(authData);
	// 	if(err) {
	// 		console.error(err);
	// 		return;
	// 	}
	// }

	handleChange(e, key) {
		//take copy of single fish
		const fish = this.props.fishes[key],
					updatedFish = {//take fish and update it with new data
						...fish,
						[e.target.name]: e.target.value
					};
		// console.log(updatedFish);
		this.props.updateFish(key, updatedFish);	
	}

	renderInventory(key) {
		const fish = this.props.fishes[key];
		return (
			// name 
			// price
			// status
			// desc
			// image
			<div className="fish-edit" key={key}>
				<input 
					ref={(input) => {this.name = input}} 
					name="name" 
					value={fish.name} 
					type="text" 
					placeholder="Fish Name" 
					onChange={(e) => {this.handleChange(e, key)}} 
				/>	
				<input 
					ref={(input) => {this.price = input}} 
					name="price" 
					value={fish.price} 
					type="text" 
					placeholder="Fish Price" 
					onChange={(e) => {this.handleChange(e, key)}} 
				/>	
				<select 
					ref={(input) => {this.status = input}} 
					name="status" 
					value={fish.status} 
					onChange={(e) => {this.handleChange(e, key)}}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>	
				<textarea 
					ref={(input) => {this.desc = input}} 
					name="desc" 
					value={fish.desc} 
					placeholder="Fish Desc" 
					onChange={(e) => {this.handleChange(e, key)}}></textarea>	
				<input 
					ref={(input) => {this.image = input}} 
					name="image" 
					value={fish.image} 
					type="text" 
					placeholder="Fish Image" 
					onChange={(e) => {this.handleChange(e, key)}} 
				/>
				<button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
			</div>
		);
	}

	render() {

		// const logout = <button>Log Out!</button>

		// //check if they are not logged in
		// if(!this.state.id) {
		// 	return (
		// 		<div>{this.renderLogin()}</div>
		// 	);
		// }

		// //check if they are owner of the store
		// if(this.state.uid !== this.state.owner) {
		// 	return (
		// 		<div>
		// 			<p>Sorry you're the owner of the store</p>
		// 			{logout}
		// 		</div>
		// 	);
		// }

		return(
			<div>
				<h2>Inventory</h2>
				{
					Object
						.keys(this.props.fishes)
						.map(this.renderInventory)
				}
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
			</div>
		);
	}
}

Inventory.propTypes = {
	fishes: React.PropTypes.object.isRequired,
	updateFish: React.PropTypes.func.isRequired,
	removeFish: React.PropTypes.func.isRequired,
	loadSamples: React.PropTypes.func.isRequired,
	addFish: React.PropTypes.func.isRequired
};

export default Inventory;