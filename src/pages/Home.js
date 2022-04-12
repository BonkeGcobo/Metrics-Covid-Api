import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountriesfromServer } from '../redux/home';

function Home(props) {
  const dispatch = useDispatch();
  console.log(dispatch(fetchCountriesfromServer()));
  return (
    <div>
       Hello world
    </div>
  );
}

export default Home;
