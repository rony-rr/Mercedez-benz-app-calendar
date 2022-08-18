import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
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

const view = ({
  user,
  onSubmit,
  days,
  horarios,
  confirmar,
  vhorario,
  arrayHorarios,
}) => {
  const [indexH, setindexH] = useState(0);
  const [dateSelect, setDateSelect] = useState(null);
  const [data, setData] = useState();
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    Alert.alert(
      "Agende su cita desde el día de mañana, excepto Domingos y días festivos."
    );
  }, []);

  const change = (x) => {
    setDateSelect(x);
    onSubmit({
      date: x,
      schedule_id: indexH,
      user_id: user,
      maintenance_description: descripcion,
    });
    setData({
      date: x,
      schedule_id: indexH,
      user_id: user,
      maintenance_description: descripcion,
    });
  };

  const SetearIndeScheduled = (element) => {
    setindexH(arrayHorarios[element]?.id || 0);
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
              SetearIndeScheduled(index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        )}
        {vhorario && <Input
          placeholder="Mantenimiento a realizar"
          changeText={setDescripcion}
          value={descripcion}
        />}
        {vhorario && (
          <Buttom
            onSubmit={() =>
              confirmar({
                date: dateSelect,
                schedule_id: indexH,
                user_id: user,
                maintenance_description: descripcion,
              })
            }
            label="Agendar Cita"
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default view;
