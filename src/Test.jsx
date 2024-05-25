import { useEffect } from "react";
// import { useQueryParams } from "../utils/hooks";
import { httpGet } from "##/http";
import Button from "--/Button";
import Home from "--/pages/Home";

const Test = () => {
	useEffect(() => {
		httpGet("comments", {
			params: {
				_page: 1,
				_limit: 10,
			},
		}).then((res) => {
			console.log(res.data);
		});
	}, []);
	return (
		<div>
			Test
			<Button />
			<Home />
		</div>
	);
};

export default Test;
