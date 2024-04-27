import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EntryCardDetails from "../components/EntryCardDetails";
import LoadingBackdrop from "../components/LoadingBackdrop";

export default function SearchResults() {
    const { entryName } = useParams();
    const [entry, setEntry] = useState(null)
    const [open, setOpen] = useState(true);
        
    const getEntry = async () => {
        const url = `http://127.0.0.1:5000/api/compendium/entry/${entryName}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.data);
        setEntry(data.data);
    };

    useEffect(() => {
        getEntry()
    }, [])

    return (
        <>
            {entry ? <EntryCardDetails entry={entry} /> : <LoadingBackdrop open={open} />}
        </>
    );
}
