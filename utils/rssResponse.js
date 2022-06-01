const successResponse = (
  res,
  userTier,
  total,
  startIndex,
  pageSize,
  currentPage,
  pages,
  section,
  status,
  results
) => {
  response = {};
  response.status = status;
  response.userTier = userTier;
  response.total = total;
  response.startIndex = startIndex;
  response.pageSize = pageSize;
  (response.currentPage = currentPage),
    (response.pages = pages),
    (response.section = section);
  response.results = results;

  //   return res.json(response);

  return response;
};

module.exports = successResponse;
