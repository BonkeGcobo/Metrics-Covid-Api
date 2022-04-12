import React from 'react';
//import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { fetchCountryFromServer } from '../redux/home';

function Details(props) {
  const { countryRegion } = props;
  console.log(countryRegion);
 // const dispatch = useDispatch();
  // dispatch(fetchCountryFromServer(countryRegion));
  return (
    <div>
      <h1>//</h1>
    </div>
  );
}

export default Details;

Details.propTypes = {
  countryRegion: PropTypes.string.isRequired,
};
