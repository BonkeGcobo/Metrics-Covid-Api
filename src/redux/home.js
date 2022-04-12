import axios from 'axios';

const baseUrl = 'https://covid.mathdro.id/api';
const initialState = [];

// Defining actions types
const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

// Fetch country action creator
const fetchCountries = (payload) => ({
  type: FETCH_COUNTRIES,
  payload,
});

export const fetchCountriesfromServer = () => async (dispatch) => {
  const response = await axios.get(`${baseUrl}/countries`);
  console.log(response);
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return [...state, action.payload];

    default:
      return state;
  }
}
export default homeReducer;
