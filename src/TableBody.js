import React from "react";

class TableBody extends React.Component {
	render() {
		const people = [
			{
				name: "Alice",
				age: 20,
				job: "Architect"
			},
			{
				name: "Bob",
				age: 21,
				job: "Builder"
			},
			{
				name: "Charlotte",
				age: 22,
				job: "Carpenter"
			},
			{
				name: "Daniel",
				age: 23,
				job: "Dancer"
			},
			{
				name: "Ellouise",
				age: 24,
				job: "Expeditionist"
			},
			{
				name: "Freddie",
				age: 25,
				job: "Florist"
			},
			{
				name: "Gabriella",
				age: 26,
				job: "Gamer"
			},
			{
				name: "Harry",
				age: 27,
				job: "Hair Stylist"
			}
		];
		return (
			<tbody>
				<tr>
					<td>Alice</td>
					<td>20</td>
					<td>Architect</td>
				</tr>
				<tr>
					<td>Bob</td>
					<td>21</td>
					<td>Builder</td>
				</tr>
				<tr>
					<td>Charlotte</td>
					<td>22</td>
					<td>Carpenter</td>
				</tr>
				<tr>
					<td>Daniel</td>
					<td>23</td>
					<td>Dancer</td>
				</tr>
				<tr>
					<td>Ellouise</td>
					<td>24</td>
					<td>Expeditionist</td>
				</tr>
				<tr>
					<td>Freddie</td>
					<td>25</td>
					<td>Florist</td>
				</tr>
				<tr>
					<td>Gabriella</td>
					<td>26</td>
					<td>Gamer</td>
				</tr>
				<tr>
					<td>Harry</td>
					<td>27</td>
					<td>Hair Stylist</td>
				</tr>
			</tbody>
		);
	}
}

export default TableBody;