import React from 'react';
import PropTypes from 'prop-types';

function CountryData(props) {
  const { countryRegion, confirmed } = props;

  return (
    <>
      <h3 className="countName">{countryRegion}</h3>
      <h5 className="countCode">
        Confirmed Cases
        {' '}
        {confirmed}
      </h5>

    </>
  );
}

export default CountryData;

CountryData.propTypes = {
  countryRegion: PropTypes.string.isRequired,
  confirmed: PropTypes.number.isRequired,
};
