import React from 'react';
import './Details.css';
import { useSelector } from 'react-redux';

function Details() {
  const countryRegionStats = useSelector((state) => state.details);
  return (
    <>
      <header className="countryRegion">
        <h1 className="title">Covid cases by country</h1>
      </header>
      <h4 className="country-filter">STATS BY COUNTRY</h4>
      <ul>
        {countryRegionStats.map((provice, index) => {
          const {
            uid, combinedKey, confirmed, deaths, active,
          } = provice;

          return (
            <li key={uid} className="provinceDetail" id={`province${index % 2}`}>
              <h3 className="country">
                {combinedKey}
              </h3>
              <div className="confirmed">
                <p className="cases">Confirmed Cases:</p>
                <p className="con-text">{confirmed}</p>
              </div>
              <div className="deaths">
                <p className="cases-deaths">Deaths:</p>
                <p className="cases-death">{deaths}</p>
              </div>
              <div className="active">
                <p className="active-cases">Active Cases:</p>
                <p className="active-numer">{active}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>

  );
}

export default Details;
