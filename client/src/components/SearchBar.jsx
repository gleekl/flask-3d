import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchBar({ compendium }) {

	function capitalise(word) {
		return word[0].toUpperCase() + word.slice(1)
	}

	return (
		<Stack sx={{ width: 300 }}>
			<Autocomplete
				id="free-solo-demo"
				freeSolo
				options={compendium.map((option) => capitalise(option.name))}
				renderInput={(params) => (
					<TextField {...params} label="Search Input" />
				)}
			/>
		</Stack>
	);
}