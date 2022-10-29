import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert, ActivityIndicator } from "react-native";

import SelectDropdown from "react-native-select-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";

import GlobalVars from "../../global/globalVars";

import Header from "../../components/molecules/header";
import Calendar from "../../components/organisms/calendar";
import Icon from "../../components/atoms/icon";
import Texto from "../../components/atoms/text";
import Input from "../../components/atoms/input";
import Buttom from "../../components/molecules/button";

import styles from "./styles";

const Element = ({
  user,
  onSubmit,
  days,
  horarios,
  confirmar,
  vhorario,
  loadingSend,
  arrayHorarios,
}) => {
  const [indexH, setindexH] = useState(0);
  const [dateSelect, setDateSelect] = useState(null);
  const [data, setData] = useState();
  const [descripcion, setDescripcion] = useState("");
  const [horaText, setHoraText] = useState("");

  useEffect(() => {
    Alert.alert(
      "Agende su cita desde el día de mañana, excepto Domingos y días festivos."
    );
  }, []);

  const change = (x) => {
    setDateSelect(x);
    onSubmit();
    setData({
      date: x,
      schedule_id: indexH,
      user_id: user,
      horaText: horaText,
      maintenance_description: descripcion,
    });
  };

  const SetearIndeScheduled = (element) => {
    setindexH(element);
  };

  const OnHandle = () => {
    confirmar({
      date: dateSelect,
      schedule: indexH === "Otro" ? horaText : indexH,
      user_id: user,
      maintenance_description: descripcion,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header label="Agendar Cita" />
      <ScrollView
        style={styles.viewScroll}
        contentContainerStyle={styles.contentContainer}
      >
        <Calendar days={days} onSubmit={change} />
        <View
          style={{
            flexDirection: "row",
            marginVertical: 15,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              marginHorizontal: 5,
              justifyContent: "center",
              display: "none",
            }}
          >
            <Icon iconName="exclamationcircle" color="#55C1FF" size={20} />
          </View>
          <View
            style={{
              marginHorizontal: 5,
              justifyContent: "center",
              display: "none",
            }}
          >
            <Texto text="Dia ocupado" size={18} />
          </View>
        </View>
        {horarios.length > 0 && (
          <SelectDropdown
            data={horarios}
            defaultButtonText="Horarios Disponibles"
            onSelect={(selectedItem, index) => {
              SetearIndeScheduled(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        )}
        {indexH === "Otro" && (
          <Input
            placeholder="Ingrese la hora aquí"
            changeText={setHoraText}
            value={horaText}
          />
        )}
        {vhorario && (
          <Input
            placeholder="Mantenimiento a realizar"
            changeText={setDescripcion}
            value={descripcion}
          />
        )}
        {vhorario && !loadingSend && (
          <Buttom onSubmit={() => OnHandle()} label="Agendar Cita" />
        )}
        {loadingSend && (
          <ActivityIndicator
            color={GlobalVars.white}
            size="large"
            style={{ alignSelf: "center", marginTop: 30 }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Element;
