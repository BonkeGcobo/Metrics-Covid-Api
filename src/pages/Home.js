import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountriesfromServer } from '../redux/home';

function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.home);
  useEffect(() => {
    if (!countries.length) dispatch(fetchCountriesfromServer());
  }, []);

  return (
    <div>
      {countries.map((country) => {
        const { name, iso2, iso3 } = country;
        return (
          <div key={iso3}>
            <h1 className="countName">{name}</h1>
            <h3 className="countCode">{iso2}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
