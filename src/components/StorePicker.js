import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {

	constructor() {
		super();

		this.goToStore = this.goToStore.bind(this);
	}

	goToStore(event) {
		//first grab the text from the input
		//thrn update the URL from '/' to '/store/:storeId'
		event.preventDefault();
		const storeId = this.storeInput.value;
		console.log(`Going to: ${storeId}`);
		this.context.router.transitionTo(`/store/${storeId}`);
	}

	render() {
		return(
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter a Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
				<button type="submit">Visit Store ></button>
			</form>
		);
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;