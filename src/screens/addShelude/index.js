import React, { useState, useEffect } from "react";

import { useFocusEffect } from "@react-navigation/native";

// utils
import useDate from "../../utils/useDate";
import fetchHook from "../../utils/useFetch";
import storage from "../../utils/useLocalStorage";

// Global values
import GlobalVars from "../../global/globalVars";

// views
import Alert from "../../utils/useAlert";
import AddShelude from "./view";

const urlDays = `${GlobalVars.urlApi}days_off`;
const urlCita = `${GlobalVars.urlApi}appointments/user`;
const urlVerificarHorario = `${GlobalVars.urlApi}schedules`;

const Index = ({ onSubmit, navigation }) => {
  const [token, setToken] = useState(null);
  const [arrayHorarios, setarrayHorarios] = useState([]);
  const [userInfo, setUserInfo] = useState({ id: "" });
  const [verificandoHorario, setverificandoHorario] = useState(false);
  const [days, setDays] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [loadingSend, setLoadingSend] = useState(false);

  useEffect(() => {
    getToken("userToken", "userInfo");
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getToken("userToken", "userInfo");
    }, [])
  );

  const getToken = async (key, key2) => {
    try {
      const response = await storage.getItem(key);
      const response2 = await storage.getItem(key2);

      if (response !== null) {
        getDaysOff(response);
        setUserInfo(response2);
        setToken(response);
      } else {
        navigation.navigate("login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDaysOff = async (token) => {
    try {
      const response = await fetchHook.fetchGet(urlDays, token);
      if (response.status === true) {
        let res = await useDate.formaterDaysOff(response.dates);

        setDays(res);
      } else {
        // console.log('Error obtenido days off')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addShelude = async (data) => {
    try {
      setLoadingSend(true);
      const response = await fetchHook.fetchPost(
        `${GlobalVars.urlApi}appointments`,
        data,
        token
      );
      // console.log(response);
      if (response.status === true) {
        setLoadingSend(false);
        navigation.navigate("myAccount");
      } else {
        Alert("Error guardando datos");
        setLoadingSend(false);
      }
    } catch (error) {
      console.log(error);
      setLoadingSend(false);
      Alert("Error, intente de nuevo");
    }
  };

  const verificarCitas = async (data) => {
    try {
      if (
        data?.maintenance_description &&
        data?.schedule &&
        data?.schedule !== 0 &&
        data?.user_id
      ) {
        const response = await fetchHook.fetchGet(urlCita, token);
        let res = response.appointments;
        let hasDate = false;
        res.map((item, i) => {
          if (item.status === 1) {
            hasDate = true;
          }
        });
        if (hasDate) {
          Alert("Aviso", "Ya cuentas con una cita pendiente");
        } else {
          addShelude(data);
        }
      } else {
        Alert("Complete los datos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verificarHorarios = async () => {
    const url = urlVerificarHorario;
    try {
      const response = await fetchHook.fetchGet(url, token);
      // console.log(response);
      const s = [];
      response?.schedules.map((item, index) => {
        s.push(item.time);
      });
      setHorarios(s);
      setarrayHorarios(response.disponibles);
      setverificandoHorario(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (!days) return null;

  return (
    <AddShelude
      days={days}
      horarios={horarios}
      onSubmit={verificarHorarios}
      confirmar={verificarCitas}
      vhorario={verificandoHorario}
      arrayHorarios={arrayHorarios}
      user={userInfo.id}
      loadingSend={loadingSend}
    />
  );
};

export default Index;
