import { days } from '../utils/days'
import { months } from '../utils/months'

export const getTimefromUnix = (unix: number): string => {
  const date = new Date(unix * 1000);
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const twoDigitMinutes: string = minutes.toString().padStart(2, "0");
  return `${hours}:${twoDigitMinutes}`;
};

export const getDayfromUnix = (unix: number): string => {
  const date = new Date(unix * 1000);
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} `;
};
