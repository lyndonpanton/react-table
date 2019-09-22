import React from "react";
import Table from "./Table";

class App extends React.Component {
	state = {
		peopleData: [
			{
				"name": "Alice",
				"age": 20,
				"job": "Architect"
			},
			{
				"name": "Bob",
				"age": 21,
				"job": "Builder"
			},
			{
				"name": "Charlotte",
				"age": 22,
				"job": "Carpenter"
			},
			{
				"name": "Daniel",
				"age": 23,
				"job": "Dancer"
			},
			{
				"name": "Ellouise",
				"age": 24,
				"job": "Expeditionist"
			},
			{
				"name": "Freddie",
				"age": 25,
				"job": "Florist"
			},
			{
				"name": "Gabriella",
				"age": 26,
				"job": "Gamer"
			},
			{
				"name": "Harry",
				"age": 27,
				"job": "Hair Stylist"
			}
		]
	};

	removePerson(index) {
		// get people
		const people = this.state.peopleData;

		// update the state of the component
		this.setState({
			// filter through data
			peopleData: people.filter(function(person, personIndex) {
				// only add people who do not have index of person to be deleted
				return personIndex !== index;
			})
		});
	};

	render() {
		const peopleData = this.state.peopleData;

		return (
			<div className="container">
				<h1>Hello React</h1>
				<Table peopleData={peopleData} removePerson={this.removePerson} />
			</div>
		);
	};
}

export default App;