import React from 'react';
import Timer from './Timer'

// Single element
const element = <h1>Hello, world</h1>;
console.log(element, typeof element); // object

// Stateless Functional Component
const SimpleComponent = (props) => (
	<div>
		The app says: {props.message}
	</div>
);

// Full Component 
class DemoComponent extends React.Component {

	render() {
		return (
			<div className="app-div-class">
				<span style={{color: 'red', fontWeight: 'bold'}}>
					Theme: {this.props.theme}
				</span>

				<Timer /> {/* I imported Timer from my own module */}

				{this.props.messages.map((m, index) =>
					// 'key' helps React optimize redrawing of changing list elements
					// (using index is often NOT a good choice)
					<SimpleComponent message={m} key={index} />
				)}

				{/* Controlled inputs (with onChange and state.value) - see: 
						https://facebook.github.io/react/docs/forms.html */}
				{/* Uncontrolled inputs - see this:
						Later access this HTML object ref. using this.textInput */}
				<input type="text" defaultValue="Uncontrolled component"
					ref={(input) => { this.textInput = input; }} />

			</div>
		);
	}
}

// const appMessages = ["Hello World!", "Welcome", "3rd message"];
// <DemoComponent theme="blue" messages={appMessages} />

export default DemoComponent;

