import axios from 'axios';

const baseUrl = 'https://covid.mathdro.id/api';
const initialState = [];

// Defining actions types
const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

// Fetch country action creator
export const fetchCountries = (payload) => ({
  type: FETCH_COUNTRIES,
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

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
export default homeReducer;
