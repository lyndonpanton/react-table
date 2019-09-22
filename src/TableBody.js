import React from "react";

class TableBody extends React.Component {
	render() {
		const rows = this.props.peopleData.map(function(row, index) {
			return (
				<tr key={index}>
					<td>{row.name}</td>
					<td>{row.age}</td>
					<td>{row.job}</td>
					<td>
						<button>Delete</button>
					</td>
				</tr>
			);
		});

		return (
			<tbody>{rows}</tbody>
		);
	}
}

export default TableBody;