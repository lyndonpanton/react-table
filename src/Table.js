import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFoot from "./TableFoot";

class Table extends React.Component {
	render() {
		return (
			<table>
				<TableHead />
				<TableBody />
				<TableFoot />
			</table>
		);
	}
}