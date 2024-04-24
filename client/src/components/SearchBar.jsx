import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchBar({ compendium }) {
	const [search, setSearch] = useState("");

	function capitalise(word) {
		return word[0].toUpperCase() + word.slice(1);
	}

	const handleSubmit = (whichForm) => {
		return async (fields) => {
			const res = await fetch(`/${whichForm}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(fields),
			});
			const data = await res.json();
			setUser(data.user);
		};
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setSearch(evt.target.value);
		console.log(evt.target.value);
	};

	useEffect(() => {
		console.log(search);
	}, [search]);

	return (
		<Stack sx={{ width: 300 }}>
			<form onSubmit={handleSubmit}>
				<Autocomplete
					id="free-solo-demo"
					freeSolo
					options={compendium.map((option) =>
						capitalise(option.name)
					)}
					renderInput={(params) => (
						<TextField {...params} label="Search Input" />
					)}
				/>
			</form>
		</Stack>
	);
}
