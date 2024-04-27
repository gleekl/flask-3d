import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EntryCard from "./EntryCard";

export default function EntryGrid({ compendium }) {
    return (
        <Box sx={{ width: "100%", margin: "10px 0" }}>
            <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {compendium.map((entry) => (
                    <Grid item xs={3} >
                        <EntryCard entry={entry} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
