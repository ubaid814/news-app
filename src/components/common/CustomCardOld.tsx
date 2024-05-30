import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import defaultImage from '../../assets/images/default-news.png';

interface CardProps {
  imageUrl: string | null;
  title: string;
  description: string;
  publishedAt: Date;
  url: string;
  author: string | null;
  source: string;
}

const CustomCard: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  publishedAt,
  url,
  source,
  author,
}) => {
  const handleNavigation = () => {
    window.open(url, "_blank");
  };
  const formattedDate = new Date(publishedAt).toLocaleDateString();

  return (
    <Box onClick={handleNavigation}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            imageUrl ||
            defaultImage
          }
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {source} - {author || "Unknown"} - {formattedDate}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CustomCard;
