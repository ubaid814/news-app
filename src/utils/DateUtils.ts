export const formatDate = (publishedAt: Date): string => {
    const formattedDate = new Date(publishedAt).toLocaleDateString();
    return formattedDate;
}