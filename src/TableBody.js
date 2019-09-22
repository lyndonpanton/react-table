import React from "react";

const TableBody = (props) => {
	const rows = props.peopleData.map(function(row, index) {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.age}</td>
				<td>{row.job}</td>
				<td>
					<button onClick={function() {
						props.removePerson(index);
					}}>Delete</button>
				</td>
			</tr>
		);
	});

	return (
		<tbody>{rows}</tbody>
	);
}

export default TableBody;