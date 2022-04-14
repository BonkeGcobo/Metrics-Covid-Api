import detailsReducer, { fetchCountryRegion } from '../details';

describe('Test if reducer and actions are working ', () => {
  it('Test if return empty array if there is no action', () => {
    expect(detailsReducer([], {})).toEqual([]);
  });

  it('Update state correctly for a given country region', () => {
    const countryRegion = [{ country: 'SA', confimed: 120 },
      { country: 'China', confimed: 23 }];
    expect(detailsReducer([], fetchCountryRegion(countryRegion))).toEqual(countryRegion);
  });
});
