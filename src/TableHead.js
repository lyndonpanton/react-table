import React from "react";

class TableHead extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<th>Name</th>
					<th>Age</th>
					<th>Job</th>
				</tr>
			</thead>
		);
	}
}

export default TableHead;