import React, { memo } from "react";
import Form from "react-bootstrap/esm/Form";
import { MdSearch } from "react-icons/md";

interface ISearch {}

const Search: React.FC<ISearch> = (props) => {
	return (
		<div className="search-comp">
			<Form.Control type="search" placeholder="Search" />
			<MdSearch />
		</div>
	);
};

export default memo(Search);
