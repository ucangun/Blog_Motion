export const calculateReadingTime = (content: string): string => {
  if (!content) return "0 min read";

  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return `${readingTime} min read`;
};
