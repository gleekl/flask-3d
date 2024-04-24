import { useEffect, useState } from "react";

const Categories = () => {
	const categories = [
		"Creatures",
		"Equipment",
		"Materials",
		"Monsters",
		"Treasure",
	];

	return (
		<>
			<h1>Categories</h1>
			{categories.map((category) => (
				<Categories />
			))}
		</>
	);
};

export default Categories;
