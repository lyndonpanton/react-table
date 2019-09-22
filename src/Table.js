import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFoot from "./TableFoot";

class Table extends React.Component {
	render() {
		const peopleData = this.props;

		return (
			<table>
				<TableHead />
				<TableBody peopleData={peopleData} />
				<TableFoot />
			</table>
		);
	}
}

export default Table;