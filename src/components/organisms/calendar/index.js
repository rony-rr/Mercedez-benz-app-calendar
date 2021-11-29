import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useFocusEffect } from "@react-navigation/native";

import GlobalVars from "../../../global/globalVars";

import useDate from "../../../utils/useDate";

import Texto from "../../atoms/text";

import styles from "./styles";

const index = ({ days, onSubmit }) => {
  const INITIAL_DATE = useDate.fechaActual;
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [mesSelected, setMesSelected] = useState("Seleccionar una fecha");
  const [data, setData] = useState();

  useEffect(() => {
    let resultDaysOff = {
      [INITIAL_DATE]: {
        selected: true,
        selectedColor: GlobalVars.greenMark,
        selectedTextColor: GlobalVars.white,
      },
    };
    days.map((item) => {
      resultDaysOff = { ...item, ...resultDaysOff };
    });
    setData(resultDaysOff);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      let resultDaysOff = {
        [INITIAL_DATE]: {
          selected: true,
          selectedColor: GlobalVars.greenMark,
          selectedTextColor: GlobalVars.white,
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
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ],
    dayNamesShort: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
    today: "Hoy dia",
  };

  LocaleConfig.defaultLocale = "es";

  return (
    <View style={{ alignItems: "center" }}>
      <Texto text={mesSelected} size={25} />
      <Calendar
        enableSwipeMonths
        style={styles.calendar}
        onDayPress={onDayPress}
        current={INITIAL_DATE}
        minDate={useDate.fechaActual}
        markingType={"custom"}
        markedDates={data}
      />
    </View>
  );
};

export default index;
