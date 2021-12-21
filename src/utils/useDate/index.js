import GlobalVars from "../../global/globalVars";

const fecha = new Date();

const formatoFecha = (fecha, formato) => {
  const map = {
    dd: fecha.getDate() < 10 ? "0" + fecha.getDate() : fecha.getDate(),
    mm:
      fecha.getMonth() < 9
        ? "0" + (fecha.getMonth() + 1)
        : fecha.getMonth() + 1,
    yy: fecha.getFullYear().toString(),
    yyyy: fecha.getFullYear(),
  };
  return formato.replace(/dd|mm|yy|yyy/gi, (matched) => map[matched]);
};

const fechaActual = formatoFecha(fecha, "yy-mm-dd");

const formatearMes = (mes) => {
  let res;
  switch (mes) {
    case "01":
      res = "Enero";
      break;
    case "02":
      res = "Febrero";
      break;
    case "03":
      res = "Marzo";
      break;
    case "04":
      res = "Abril";
      break;
    case "05":
      res = "Mayo";
      break;
    case "06":
      res = "Junio";
      break;
    case "07":
      res = "Julio";
      break;
    case "08":
      res = "Agosto";
      break;
    case "09":
      res = "Septiembre";
      break;
    case "10":
      res = "Octubre";
      break;
    case "11":
      res = "Noviembre";
      break;
    case "12":
      res = "Diciembre";
      break;
    default:
      res = "Seleccionar una fecha";
      break;
  }

  return res;
};

const formaterDaysOff = (data) => {
  const res = data.map((item, index) => {
    let day = item.day < 10 ? ("0" + item.day) : item.day;
    let month = item.month < 10 ? ("0" + item.month) : item.month;
    let fecha = `${item.year}-${month}-${day}`;
    return {
      [fecha]: {
        selected: true,
        disabled: true,
        disableTouchEvent: true,
        customStyles: {
          container: {
            backgroundColor: GlobalVars.redMark,
          },
          text: {
            color: GlobalVars.white,
            fontWeight: "bold",
          },
        },
      },
    };
  });
  return res;
};

const date = {
  fecha,
  formatoFecha,
  formatearMes,
  fechaActual,
  formaterDaysOff,
};

export default date;
