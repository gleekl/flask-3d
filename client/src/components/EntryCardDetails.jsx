import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import capitalise from "../utils/capitalise";

export default function EntryCardDetails({ entry }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={entry.image}
                    alt={entry.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {capitalise(entry.name)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {entry.description}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                        Drops
                    </Typography>
                    {entry.drops.map((drop) => (
                        <Typography variant="body2" color="text.secondary">
                            {drop}
                        </Typography>
                    ))}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
