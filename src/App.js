import './App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
