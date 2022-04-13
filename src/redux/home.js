import axios from 'axios';

const baseUrl = 'https://covid.mathdro.id/api';
const initialState = [];

// Defining actions types
const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
const FETCH_COUNTRY_REGION = 'FETCH_COUNTRY_REGION';

// Fetch country action creator
const fetchCountries = (payload) => ({
  type: FETCH_COUNTRIES,
  payload,
});

const fetchCountryRegion = (payload) => ({
  type: FETCH_COUNTRY_REGION,
  payload,
});

export const fetchCountriesfromServer = () => async (dispatch) => {
  const response = await axios.get(`${baseUrl}/confirmed`);
  const countryArray = [];
  for (let i = 0; i < 6; i += 1) {
    countryArray.push(response.data[i]);
  }
  dispatch(fetchCountries(countryArray));
};

export const fetchCountryFromServer = (countryRegion) => async (dispatch) => {
  const response = await axios.get(`${baseUrl}/countries/${countryRegion}/confirmed`);
  dispatch(fetchCountryRegion(response.data));
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return [...state, ...action.payload];

    case FETCH_COUNTRY_REGION:
      return [...state, ...action.payload]

    default:
      return state;
  }
}
export default homeReducer;
