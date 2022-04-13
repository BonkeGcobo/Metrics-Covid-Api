import React from 'react';
import { useSelector } from 'react-redux';

function Details() {
  const countryRegionStats = useSelector((state) => state.details);
  return (
    <ul>
      {countryRegionStats.map((provice) => {
        const {
          uid, combinedKey, confirmed, deaths, active,
        } = provice;

        return (
          <li key={uid} className="provinceDetail">
            <h3 className="country">
              Country
              <span>{combinedKey}</span>
            </h3>
            <h3 className="confirmed">
              Confirmed Cases
              <span>{confirmed}</span>
            </h3>
            <h3 className="deaths">
              Deaths
              <span>{deaths}</span>
            </h3>
            <h3 className="active">
              Active Cases
              <span>{active}</span>
            </h3>
          </li>
        );
      })}
    </ul>
  );
}

export default Details;
