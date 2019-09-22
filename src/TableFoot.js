import React from "react";

class TableFoot extends React.Component {
	render() {
		return (
			<tfoot>
				<tr>
					<td colSpan="3">This table is rendered using ReactJS</td>
				</tr>
			</tfoot>
		);
	}
}

export default TableFoot;