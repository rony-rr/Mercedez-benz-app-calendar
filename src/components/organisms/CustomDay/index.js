import * as React from "react";
import { isSunday, isToday } from "date-fns";

import { TouchableOpacity, Text } from "react-native";

import Day from "react-native-calendars/src/calendar/day/basic";

import GlobalVars from "../../../global/globalVars";

import useDate from "../../../utils/useDate";

export default function CustomDay(props) {
  let { date, state, marking, selectedDay, daysDisabled, ...rest } = props;
  // console.log({ daysDisabled });
  // console.log(new Date(date.dateString).toISOString());

  const arrDisabledDays = [];

  daysDisabled.forEach((item) => {
    for (const [key, value] of Object.entries(item)) {
      arrDisabledDays.push(key);
    }
  });

  const d = new Date(date.year, date.month - 1, date.day);
  const getStringDateCurrent = useDate.formatoFecha(d, "yy-mm-dd");

  state =
    state === "disabled"
      ? "disabled"
      : selectedDay === getStringDateCurrent
      ? "selected"
      : "";

  // console.log(
  //   arrDisabledDays,
  //   getStringDateCurrent,
  //   arrDisabledDays.includes(String(getStringDateCurrent))
  // );

  marking = {};
  marking.disabled =
    isSunday(d) || arrDisabledDays.includes(String(getStringDateCurrent));
  marking.disableTouchEvent = marking.disabled === true;
  marking.isToday = isToday(d);

  return (
    <TouchableOpacity
      style={{
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:
          state === "selected" && !marking.isToday
            ? GlobalVars.blueMercedes
            : state === "selected" && marking.isToday
            ? GlobalVars.blueMercedes
            : marking.isToday
            ? GlobalVars.greenMark
            : GlobalVars.white,
        padding: 5,
        borderRadius: 75,
      }}
      onPress={() => props.onPress(date)}
      onLongPress={() => props.onPress(date)}
    >
      <Text
        style={{
          textAlign: "center",
          color:
            state === "disabled" || marking.disabled
              ? "#D5DBDB"
              : state === "selected" || marking.isToday
              ? GlobalVars.white
              : GlobalVars.black,
          fontWeight: "bold",
        }}
      >
        {date.day}
      </Text>
    </TouchableOpacity>
  );
}
