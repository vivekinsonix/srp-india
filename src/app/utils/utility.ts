export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const truncateContent = (content: string, wordLimit = 20) => {
  const words = content.split(/\s+/); // split into words
  if (words.length <= wordLimit) return content;
  return words.slice(0, wordLimit).join(' ') + '...';
};
