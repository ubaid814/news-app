import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import defaultImage from '../../assets/images/default-news.png';
import Tags from "./Tags";

interface CardProps {
  imageUrl: string | null;
  title: string;
  description: string;
  tags: string[];
}

const GenericCard: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  tags,
}) => {
  
  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            imageUrl ||
            defaultImage
          }
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Tags tags={tags} />
        </CardContent>
      </Card>
  );
};

export default GenericCard;
