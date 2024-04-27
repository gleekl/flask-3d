import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import capitalise from "../utils/capitalise";

export default function SearchBar({ compendium, handleSubmit }) {
    const [search, setSearch] = useState("");

    const handleChange = (evt, values) => {
        setSearch(values);
    };

    useEffect(() => {
        console.log(search);
    }, [search]);

    return (
        <Stack sx={{ width: 300 }}>
            <form action={`/compendium/${search}`} onSubmit={handleSubmit} method="POST">
                <Autocomplete
                    id="free-solo"
                    freeSolo
                    onChange={handleChange}
                    options={compendium.map((option) =>
                        option.name
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            id="search"
                            label="Search Input"
                        />
                    )}
                />
                <button type="submit" >Search</button>
            </form>
        </Stack>
    );
}
