const rssGenerator = (response, posts) => {
  let data = `<rss version="2.0">`;
  data += `<channel>`;
  data += `<status>`;
  data += response.status;
  data += `</status>`;

  data += `<usertier>`;
  data += response.userTier;
  data += `</usertier>`;

  data += `<total>`;
  data += response.total;
  data += `</total>`;

  data += `<startIndex>`;
  data += response.startIndex;
  data += `</startIndex>`;

  data += `<pageSize>`;
  data += response.pageSize;
  data += `</pageSize>`;

  data += `<currentPage>`;
  data += response.currentPage;
  data += `</currentPage>`;

  data += `<pages>`;
  data += response.pages;
  data += `</pages>`;

  data += `<section>`;
  for (sec of response.section) {
    data += `
    <item>
      <id>${sec.id}</id>
      <title> ${sec.title}</title>
      <webUrl>${sec.webUrl}</webUrl>
      <apiUrl>${sec.apiUrl}</apiUrl>
      </item>
      `;
  }

  data += `</section>`;

  data += `<results>`;
  for (post of posts) {
    data += `
    <item>
        <id>${post.id}</id>
        <postType>${post.postType}</postType>
        <sectionId> ${post.sectionId}</sectionId>
        <publishedDate>${post.publishedDate}</publishedDate>
        <title> ${post.title}</title>
      <webUrl>${post.webUrl}</webUrl>
      <apiUrl>${post.apiUrl}</apiUrl>
      <isHosted>${post.isHosted}</isHosted>
      <pillarId>${post.pillarId}</pillarId>
      <pillarName>${post.pillarName}</pillarName>
        </item>`;
  }
  data += `</results>`;

  data += `</channel>`;
  data += `</rss>`;

  return data;
};

module.exports = { rssGenerator };
