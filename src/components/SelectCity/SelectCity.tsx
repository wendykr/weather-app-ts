import './SelectCity.css';
import { cities } from '../../utils/cities';

interface SelectCityProps {
  handleSelect: (city: string) => void;
  city: string;
}

export const SelectCity: React.FC<SelectCityProps> = ({ handleSelect, city }) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value;
    handleSelect(selectedCity);
  };

  return (
    <div className="select-wrapper">
      <select
        className="select"
        name="cityselect"
        id="cityselect"
        value={city}
        onChange={handleChange}
      >
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};