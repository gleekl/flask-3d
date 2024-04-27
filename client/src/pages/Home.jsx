import { Suspense, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SimpleBackdrop from "../components/LoadingBackdrop";
import LoadingBackdrop from "../components/LoadingBackdrop";
import EntryCard from "../components/EntryCard";
import EntryGrid from "../components/EntryGrid";

const Home = ({ compendium }) => {
    const [entry, setEntry] = useState(null);
    const [open, setOpen] = useState(true);

    const handleSubmit = async (field) => {
        const res = await fetch(`/api/compendium/entry/${field}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(search),
        });
        const data = await res.json();

        console.log(data);
    };

    return (
        <>
            <h1>Home</h1>
            {/* If the compendium data has loaded, show the Search Bar. Otherwise, show the LoadingBackdrop */}
            {compendium ? (
                <SearchBar
                    compendium={compendium}
                    handleSubmit={handleSubmit}
                />
            ) : (
                <LoadingBackdrop open={open} />
            )}
            {compendium && <EntryGrid compendium={compendium} />}
        </>
    );
};

export default Home;
