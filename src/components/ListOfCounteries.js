import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCountriesfromServer } from '../redux/home';
import { fetchCountryFromServer } from '../redux/details';
import CountryData from './CountryData';
import './Components.css';

const ListOfCountries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.home);
  useEffect(() => {
    if (!countries.length) dispatch(fetchCountriesfromServer());
  }, []);

  return (
    <section className="countryRegionList">
      <ul className="filter-by-country">
        {countries.map((country, index) => {
          const { countryRegion, iso3, confirmed } = country;
          return (
            <NavLink to="/details" key={iso3} id="info" className={`info${index % 2}`} onClick={() => dispatch(fetchCountryFromServer(countryRegion))}>
              <li className="eachCountry">
                <CountryData
                  countryRegion={countryRegion}
                  confirmed={confirmed}
                />
              </li>
            </NavLink>
          );
        })}
      </ul>
    </section>
  );
};

export default ListOfCountries;
