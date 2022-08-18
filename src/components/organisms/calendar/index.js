import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useFocusEffect } from "@react-navigation/native";
import { isSunday } from "date-fns";

import GlobalVars from "../../../global/globalVars";

import useDate from "../../../utils/useDate";

import Texto from "../../atoms/text";
import CustomDay from "../../organisms/CustomDay";

import styles from "./styles";

const index = ({ days, onSubmit }) => {
  const INITIAL_DATE = useDate.fechaActual;
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [maxDate, setMaxDate] = useState(null);
  const [mesSelected, setMesSelected] = useState("Seleccionar una fecha");
  const [data, setData] = useState();

  useEffect(() => {
    let d = new Date();
    let afterDays = 1;
    d.setDate(d.getDate() + afterDays);
    setSelected(useDate.formatoFecha(d, "yy-mm-dd"));
    d = new Date();
    afterDays = 90;
    d.setDate(d.getDate() + afterDays);
    let maxDestinate = useDate.formatoFecha(d, "yy-mm-dd");
    setMaxDate(maxDestinate);
    let current = new Date(INITIAL_DATE);
    let resultDaysOff = {
      [INITIAL_DATE]: {
        selected: true,
        selectedColor: GlobalVars.greenMark,
        selectedTextColor: GlobalVars.white,
        disabled: true,
        disableTouchEvent: true,
        marking: {
          disabled: true,
          disableTouchEvent: true,
        },
      },
    };
    days.map((item) => {
      resultDaysOff = { ...item, ...resultDaysOff };
    });
    setData(resultDaysOff);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      let d = new Date();
      let afterDays = 1;
      d.setDate(d.getDate() + afterDays);
      setSelected(useDate.formatoFecha(d, "yy-mm-dd"));
      d = new Date();
      afterDays = 90;
      d.setDate(d.getDate() + afterDays);
      let maxDestinate = useDate.formatoFecha(d, "yy-mm-dd");
      setMaxDate(maxDestinate);
      var startDate = new Date(INITIAL_DATE);
      var endDate = new Date(d);
      //   let objectSundays = {};
      //   while (startDate <= endDate) {
      //     if (startDate.getDay() === 0) {
      //         objectSunday = {

      //         };
      //     } else {
      //         startDate.setDate(startDate.getDate() + 1);
      //     }
      // }
      let resultDaysOff = {
        [INITIAL_DATE]: {
          selected: true,
          selectedColor: "#BEDE19",
          selectedTextColor: GlobalVars.white,
          disabled: true,
          disableTouchEvent: true,
          marking: {
            disabled: true,
            disableTouchEvent: true,
          },
        },
      };
      days.map((item) => {
        resultDaysOff = { ...item, ...resultDaysOff };
      });
      setData(resultDaysOff);

      return () => null;
    }, [days])
  );

  const onDayPress = (day) => {
    onSubmit(day.dateString);
    setMesSelected(useDate.formatearMes(day.month.toString()));

    let resultDaysOff = {};
    days.map((item) => {
      resultDaysOff = { ...item, ...resultDaysOff };
    });

    setData({
      ...resultDaysOff,
      [day.dateString]: {
        selected: true,
        marked: true,
        disableTouchEvent: true,
        selectedColor: GlobalVars.greenMark,
        selectedTextColor: GlobalVars.white,
      },
    });
  };

  LocaleConfig.locales["es"] = {
    monthNames: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    monthNamesShort: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    dayNames: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ],
    dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    today: "Hoy dia",
  };

  LocaleConfig.defaultLocale = "es";

  return (
    <View style={{ alignItems: "center" }}>
      <Texto text={mesSelected} size={25} />
      <View style={{ width: "100%", height: 1, marginVertical: 15 }} />
      <Calendar
        enableSwipeMonths
        style={styles.calendar}
        onDayPress={onDayPress}
        current={INITIAL_DATE}
        minDate={selected}
        maxDate={maxDate}
        markingType={"custom"}
        markedDates={data}
        disabledDaysIndexes={[0]}
        dayComponent={(props) => {
          return <CustomDay {...props} />;
        }}
      />
    </View>
  );
};

export default index;
