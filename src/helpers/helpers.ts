export const getTimefromUnix = (unix: number): string => {
  const date = new Date(unix * 1000);
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const twoDigitMinutes: string = minutes.toString().padStart(2, "0");
  return `${hours}:${twoDigitMinutes}`;
};

export const getDayfromUnix = (unix: number): string => {
  const date = new Date(unix * 1000);

  const localDate = new Date(date.toLocaleString('en-US', { timeZone: 'Europe/Prague' }));

  const dayOfWeek = localDate.toLocaleString('en-US', { weekday: 'long' });
  const dayOfMonth = localDate.getDate();
  const month = localDate.toLocaleString('en-US', { month: 'long' });

  return `${dayOfWeek}, ${month} ${dayOfMonth}`;
};