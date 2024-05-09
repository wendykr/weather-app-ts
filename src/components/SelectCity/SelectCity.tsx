import './SelectCity.css';

interface SelectCityProps {
  handleButtonClick: (city: string) => void;
}

export const SelectCity:React.FC<SelectCityProps> = ({ handleButtonClick }) => {

  return (
    <div className="button-group">
      <button className="button" onClick={() => handleButtonClick('Prague')}>Prague</button>
      <button className="button" onClick={() => handleButtonClick('Reykjavik')}>Reykjavik</button>
      <button className="button" onClick={() => handleButtonClick('Tenerife')}>Tenerife</button>
    </div>
  )
}