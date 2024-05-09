import { useState } from 'react';
import './App.css'
import { Weather } from './components/Weather/Weather';
import { SelectCity } from './components/SelectCity/SelectCity';

function App() {
  const [city, setCity] = useState<string> ('Prague');

  const handleSelect = (city: string) => {
    setCity(city);
    console.log(city);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <SelectCity handleSelect={handleSelect} city={city} />
        <Weather city={city} />
      </div>
    </div>
  );
}

export default App
