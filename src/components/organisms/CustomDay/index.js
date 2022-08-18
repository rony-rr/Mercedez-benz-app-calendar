import * as React from "react";
import { isSunday } from "date-fns";
import Day from "react-native-calendars/src/calendar/day/basic";

export default function CustomDay(props) {
  let { date, marking } = props;

  marking = {};
  marking.disabled = isSunday(new Date(date.year, date.month - 1, date.day));
  marking.disableTouchEvent = marking.disabled === true;

  if (marking.disabled) {
    let newProps = { ...props };
    newProps.marking = marking;
    return <Day {...newProps} />;
  }

  return <Day {...props} />;
}
