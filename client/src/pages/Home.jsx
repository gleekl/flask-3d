import { Suspense, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SimpleBackdrop from "../components/LoadingBackdrop";
import LoadingBackdrop from "../components/LoadingBackdrop";

const Home = () => {
	const [compendium, setCompendium] = useState(null);
	const [open, setOpen] = useState(true);

	const getCompendium = async () => {
		const url = "http://127.0.0.1:5000/api";
		const res = await fetch(url);
		const data = await res.json();
		setCompendium(data.data);
	};

	useEffect(() => {
		getCompendium();
	}, []);
	console.log(compendium);

	return (
		<>
			<h1>Home</h1>
			<SimpleBackdrop />
            {/* If the compendium data has loaded, show the Search Bar. Otherwise, show the LoadingBackdrop */}
            {
                compendium 
                ? <SearchBar compendium={compendium} /> 
                : <LoadingBackdrop open={open} />
            }
		</>
	);
};

export default Home;
