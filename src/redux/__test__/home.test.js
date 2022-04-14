import homeReducer, { fetchCountries } from '../home';

describe('Test the reducer and actions', () => {
  it('Test if there is no action, reducer returns empty store', () => {
    expect(homeReducer(undefined, {})).toEqual([]);
  });

  it('Update state correctly given a country', () => {
    const countries = [{
      name: 'South Africa',
      confirmed: '1000',

    }];
    expect(homeReducer([], fetchCountries(countries))).toEqual(countries);
  });
});
