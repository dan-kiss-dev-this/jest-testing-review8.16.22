const googleSearch = require('./script');

databaseMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

describe('googleSearch', () => {
  // it comes from jest
  it('This is a test', () => {
    // googleSearch('testtest', databaseMock);
    expect('hello').toBe('hello');
  });

  it('is searching google', () => {
    expect(googleSearch('testtest', databaseMock)).toEqual([]);
    expect(googleSearch('dog', databaseMock)).toEqual([
      'dog.com',
      'dogpictures.com',
    ]);
  });

  it('should work with undefined and null input', () => {
    expect(googleSearch(undefined, databaseMock)).toEqual([]);
    expect(googleSearch(null, databaseMock)).toEqual([]);
  });

  it('should not return more then 3 matches', () => {
    expect(googleSearch('.com', databaseMock).length).toEqual(3);
  });
});
