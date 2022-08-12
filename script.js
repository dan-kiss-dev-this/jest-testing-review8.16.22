const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com',
];

const googleSearch = (searchInput, database = []) => {
  const matches = database.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

const answer = googleSearch('cats', googleDatabase);
// console.log(answer);

module.exports = googleSearch;
