import useDate from "../useDate";

export default function isToday(date) {
  const today = new Date();
  const todayDate = useDate.formatoFecha(today, "yy-mm-dd");

  if (todayDate === date) {
    return true;
  }

  return false;
}
