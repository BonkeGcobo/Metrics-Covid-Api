import './Home.css';
import ListOfCountries from '../components/ListOfCounteries';
import icon from '../imgs/earth-africa-solid.svg';

function Home() {
  return (
    <>
      <header className="homePage">
        <img src={icon} alt="global-icon" className="global-icon" />
        <h1 className="title">Confirmed Cases of Covid Globally</h1>
      </header>
      <h4 className="region-filter">STATS BY COUNTRY REGION</h4>
      <ListOfCountries />
    </>
  );
}

export default Home;
