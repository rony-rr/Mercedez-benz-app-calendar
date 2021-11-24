
const fecha = new Date();
 
const formatoFecha = (fecha, formato) => {
  const map = {
      dd: fecha.getDate(),
      mm: fecha.getMonth() + 1,
      yy: fecha.getFullYear().toString(),
      yyyy: fecha.getFullYear()
  }
  return formato.replace(/dd|mm|yy|yyy/gi, matched => map[matched])
}

const fechaActual = formatoFecha(fecha,'yy-mm-dd');


const formatearMes = (mes) => {
  let res;
  switch (mes) {
    case "01":
      res='Enero'
    break;
    case "02":
      res='Febrero'
    break;
    case "03":
      res='Marzo'
    break;
    case "04":
      res='Abril'
    break;
    case "05":
      res='Mayo'
    break;
    case "06":
      res='Junio'
    break;
    case "07":
      res='Julio'
    break;
    case "08":
      res='Agosto'
    break;
    case "09":
      res='Septiembre'
    break;
    case "10":
      res='Octubre'
    break;
    case "11":
      res='Noviembre'
    break;
    case '12':
      res='Diciembre'
    break;
    default:
      res='Seleccionar una fecha'
    break;
  }

  return res;
}


const formaterDaysOff =(data)=>{
  const res = data.map((item,index)=>{
    let fecha = `${item.year}-${item.month}-${item.day}`;
    return {
      [fecha]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#45B5EA',
        selectedTextColor: 'white'
      }
    }
  })
  return res;
}
const date = {
  fecha,
  formatearMes,
  fechaActual,
  formaterDaysOff
}
export default date;