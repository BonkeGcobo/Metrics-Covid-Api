import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCountriesfromServer} from '../redux/home';
import { fetchCountryFromServer } from '../redux/details';
import CountryData from './CountryData';

const ListOfCountries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.home);
  useEffect(() => {
    if (!countries.length) dispatch(fetchCountriesfromServer());
  }, []);

  return (
    <ul>
      {countries.map((country) => {
        const { countryRegion, iso3, confirmed } = country;
        return (
          <NavLink to="/details" key={iso3} className="info" onClick={() => dispatch(fetchCountryFromServer(countryRegion))}>
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
  );
};

export default ListOfCountries;
