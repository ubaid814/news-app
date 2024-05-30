import React from "react";
import Box from "@mui/material/Box";
import GenericCard from "./GenericCard";
import useNavigation from "../../Hooks/useNavigation";
import { formatDate } from "../../utils/DateUtils";

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
  const handleNavigation = useNavigation(url);
  const formattedDate = formatDate(publishedAt);

  return (
    <Box onClick={handleNavigation}>
      <GenericCard
        imageUrl={imageUrl}
        title={title}
        description={description}
        tags={[source, author || "Unknown", formattedDate]}
      />
    </Box>
  );
};

export default CustomCard;
