import { useState } from 'react';
import './App.css'
import { Weather } from './components/Weather/Weather';
import { SelectCity } from './components/SelectCity/SelectCity';

function App() {
  const [city, setCity] = useState<string> ('Prague');

  const handleButtonClick = (city: string) => {
    setCity(city);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <SelectCity handleButtonClick={handleButtonClick}/>
        <Weather city={city} />
      </div>
    </div>
  );
}

export default App
