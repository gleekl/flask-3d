import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import EntryPage from "./pages/EntryPage";
import SearchResults from "./pages/SearchResults";

function App() {
    const [compendium, setCompendium] = useState(null);

    const getCompendium = async () => {
        const url = "http://127.0.0.1:5000/api/compendium";
        const res = await fetch(url);
        const data = await res.json();
        setCompendium(data.data);
    };

	const handleSubmit = async (evt) => {
		evt.preventDefault()
        const res = await fetch(`/api/compendium/entry/${search}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(search),
        });
        const data = await res.json();
	}

    useEffect(() => {
        getCompendium();
    }, []);

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home compendium={compendium} handleSubmit={handleSubmit} />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/compendium">
                    <Route path=":entryId" element={<EntryPage />} />
                    <Route path=":entryName" element={<SearchResults />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
