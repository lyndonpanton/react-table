import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFoot from "./TableFoot";

class Table extends React.Component {
	render() {
		const peopleData = this.props.peopleData;
		const removePerson = this.props.removePerson;

		return (
			<table>
				<TableHead />
				<TableBody peopleData={peopleData} removePerson={removePerson} />
				<TableFoot />
			</table>
		);
	}
}

export default Table;