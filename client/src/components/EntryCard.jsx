import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import capitalise from "../utils/capitalise";

export default function EntryCard({ entry }) {
  return (
    <Link to={`/compendium/${entry.id}`} >
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
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
