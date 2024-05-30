
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface TagsProps {
    tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
    return (
        <Stack direction="row" flexWrap={"wrap"} gap={0.5}>
            {tags.map((tag, index) => (
                <Chip key={index} label={tag} />
            ))}
        </Stack>
    );
};

export default Tags;