import axios from 'axios';

const baseUrl = 'https://covid.mathdro.id/api';
const initialState = [];

const FETCH_COUNTRY_REGION = 'FETCH_COUNTRY_REGION';

const fetchCountryRegion = (payload) => ({
    type: FETCH_COUNTRY_REGION,
    payload,
});



export const fetchCountryFromServer = (countryRegion) => async (dispatch) => {
    const response = await axios.get(`${baseUrl}/countries/${countryRegion}/confirmed`);
    dispatch(fetchCountryRegion(response.data));
};

detailsReducer = (state = initialState, action) => {
    switch (action.type){
      case FETCH_COUNTRY_REGION:
        return [...state, ...action.payload];
      
      default:
          return state;
    }
    

}