const paginationCount = (articlesCount) =>
  articlesCount % 5 === 0 ? Math.round(articlesCount / 5) : Math.round(articlesCount / 5 + 1);

export default paginationCount;
