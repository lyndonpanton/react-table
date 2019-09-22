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

	render() {
		const peopleData = [
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
		];

		return (
			<div className="container">
				<h1>Hello React</h1>
				<Table peopleData={peopleData} />
			</div>
		);
	}
}

export default App;