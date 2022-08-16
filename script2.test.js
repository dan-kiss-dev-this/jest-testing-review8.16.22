const fetch = require('node-fetch');
const swapi = require('./script2');

// done makes jest wait until the done callback is called to see if the test finished, useful with async
it('should call swapi-star wars api to get people', (done) => {
  // tests if the one test is running
  expect.assertions(1);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
    done();
  });
});

it('should call swapi-star wars api to get people', () => {
  expect.assertions(1);
  // we turn the promise jest is smart to wait for the test to resolve before passing the test, an issue will lead to reject!
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
  });
});

it('should call swapi-star wars api to get people with a promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then((data) => {
    // console.log(25, data.results);
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it('should getPeople returns count and result via mock', () => {
  //comes with jest, jest.fn() is function
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );
  return swapi.getPeoplePromise(mockFetch).then((data) => {
    console.log(43, data);
    expect.assertions(4);
    // jest.fn() allows us to listen in as its a spy, we can see what mockFetch did inside people promise
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people');
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
