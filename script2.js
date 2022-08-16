// asyncronous testing is harder to make
// node fetch() is using the window object but we are testing using node aka there is no window object! we use the node-fetch package to access this function.
const fetch = require('node-fetch');

//we pass in fetch to show dependency injection
const getPeoplePromise = (fetch) => {
  return fetch('https://swapi.py4e.com/api/people')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(11, data);
      return {
        count: data.count,
        results: data.results,
      };
    });
};

getPeoplePromise(fetch);

// async await version of the code
const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.py4e.com/api/people');
  const data = await getRequest.json();
  console.log(27, data);
  return {
    count: data.count,
    results: data.results,
  };
};

getPeople(fetch);

module.exports = {
  getPeople,
  getPeoplePromise,
};
