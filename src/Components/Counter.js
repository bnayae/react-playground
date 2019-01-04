// https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
// snippet: rce

import React, { Component } from 'react';

class Counter extends Component {
	// snippet: rconst
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			label: 'Start imcrementing',
		};
	}

	increment() {
		this.setState(
			(prevState, props) => ({
				label: (props.Name || '') + ': Continue incrementing',
				// NEVER MODIFY STATE DIRECTLY!!!
				count: prevState.count + 1, // BAD PATTERN (Optimization will use stale current state)
			}),
			() => console.log('continuation: value = ' + this.state.count) // continuation of the state assignment
		); // called async

		// this.setState(
		// 	{
		// 		// NEVER MODIFY STATE DIRECTLY!!!
		// 		count: this.state.count + 1, // BAD PATTERN (Optimization will use stale current state)
		// 	},
		// 	() => console.log('continuation: value = ' + this.state.count) // continuation of the state assignment
		// ); // called async

		//console.log('miss the computation: value = ' + this.state.count); // NEVER CHECK THE STATE WITHOUT USING CONTINUATION
	}

	increment5() {
		this.increment();
		this.increment();
		this.increment();
		this.increment();
		this.increment();
	}

	render() {
		return (
			<div>
				<div>Count: {this.state.count}</div>
				<button onClick={() => this.increment5()}>{this.state.label}</button>
			</div>
		);
	}
}

export default Counter;
