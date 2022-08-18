import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import GlobalVars from "../../global/globalVars";

import Icon from "../../components/atoms/icon";
import Input from "../../components/atoms/input";
import StatusBar from "../../components/atoms/statusBar";
import Header from "../../components/molecules/header";
import ImgProfile from "../../components/molecules/imgProfile";
import BtnOption from "../../components/organisms/btnOption";

import Styles from "./styles";

const styles = Styles;

const index = ({
  imgProfile,
  dataUser,
  onSubmit,
  cita,
  logoutProcess,
  cancelDate,
  dropCita,
  navigation,
}) => {
  // console.log({cita});

  const okCancel = (idCita) => {
    Alert.alert("¿Desea cancelar", "esta cita?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "OK", onPress: () => cancelDate(idCita) },
    ]);
  };

  const deleteCita = (idCita) => {
    Alert.alert("¿Desea eliminar", "esta cita?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "OK", onPress: () => dropCita(idCita) },
    ]);
  };

  const renderDates = () => {
    if (!cita?.length) return null;

    return cita.map((item, i) => {
      // console.log("****************");
      // console.log({ item });
      let d = item?.date ? new Date(`${item?.date}T12:00:00Z`) : null;
      // console.log({ d });
      const monthNames = [
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
      ];

      const datePrint =
        (d.getDate() < 10 ? "0" + String(d.getDate()) : String(d.getDate())) +
        " de " +
        monthNames[d.getMonth()] +
        " del " +
        d.getFullYear();
      // console.log({ datePrint });

      return (
        <View key={"cita_" + i} style={styles.viewDate}>
          {item.status === 3 && (
            <TouchableOpacity
              style={styles.dropDate}
              onPress={() => deleteCita(item?.id || null)}
            >
              <AntDesign name="delete" size={25} color={GlobalVars.white} />
            </TouchableOpacity>
          )}
          {item?.date && (
            <Text style={styles.styleLabel}>{"Fecha: " + datePrint}</Text>
          )}
          {item?.schedule?.time && (
            <Text style={[styles.styleLabel, { marginTop: 2 }]}>
              {"Hora: " + item?.schedule?.time}
            </Text>
          )}
          <View
            style={{
              width: "100%",
              height: 1,
              borderRadius: 25,
              marginBottom: 25,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            {item.status && (
              <View
                style={[
                  styles.reserved,
                  {
                    backgroundColor:
                      item.status === 1 || item.status === 2
                        ? GlobalVars.blueMercedes
                        : GlobalVars.redMark,
                  },
                ]}
              >
                {item.status === 1 && (
                  <Text style={styles.labelReserved}>Reservada</Text>
                )}
                {item.status === 0 && (
                  <Text style={styles.labelReserved}>Eliminada</Text>
                )}
                {item.status === 2 && (
                  <Text style={styles.labelReserved}>Finalizada</Text>
                )}
                {item.status === 3 && (
                  <Text style={styles.labelReserved}>Cancelada</Text>
                )}
              </View>
            )}
            {/* {item.status === 1 && (
              <TouchableOpacity
                style={{
                  borderColor: GlobalVars.greenMark,
                  backgroundColor: GlobalVars.greenMark,
                  borderRadius: 7,
                  borderWidth: 2,
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                }}
                onPress={() => navigation.navigate("editSchedule", {itemToEdit: item})}
              >
                <Text
                  style={[styles.labelReserved, { color: GlobalVars.white }]}
                >
                  Editar
                </Text>
              </TouchableOpacity>
            )} */}
            {item.status === 1 && (
              <TouchableOpacity
                style={{
                  borderColor: GlobalVars.redMark,
                  borderRadius: 7,
                  borderWidth: 2,
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                }}
                onPress={() => okCancel(item?.id || null)}
              >
                <Text
                  style={[styles.labelReserved, { color: GlobalVars.redMark }]}
                >
                  Cancelar
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    });
  };

  if (dataUser.length === 0) {
    return (
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(74,89,95,0.5)", "black"]}
          style={[
            styles.background,
            { flex: 1, justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontFamily: GlobalVars.fontFamily,
            }}
          >
            Cargando...
          </Text>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(74,89,95,0.5)", "black"]}
        style={styles.background}
      >
        <Header label="Perfil" />
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("uploadPic")}>
            <ImgProfile img={imgProfile} data={dataUser} />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ width: "100%", flex: 1, paddingBottom: 100 }}>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              paddingBottom: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 30,
                marginTop: 10,
                fontFamily: "Daimler",
              }}
            >
              Mi Mercedes
            </Text>

            <View style={styles.layoutCitas}>
              {!cita?.length || <Text style={styles.styleLabel}>Citas:</Text>}
              {renderDates()}
            </View>
            {dataUser?.model === null || (
              <Input
                placeholder={
                  dataUser.model === null
                    ? "Sin modelo..."
                    : "Modelo: " + dataUser.model.toString()
                }
                editable={false}
              />
            )}
            {dataUser?.license_plate === null || (
              <Input
                placeholder={
                  dataUser.license_plate === null
                    ? "Sin datos..."
                    : "Placa: " + dataUser.license_plate.toString()
                }
                editable={false}
              />
            )}
            {dataUser?.year === null || (
              <Input
                placeholder={
                  dataUser.year === null
                    ? "Sin datos..."
                    : "Año: " + dataUser.year.toString()
                }
                editable={false}
              />
            )}
            {dataUser?.email === null || (
              <Input
                placeholder={
                  dataUser.email === null
                    ? "Sin correo..."
                    : "Correo: " + dataUser.email.toString()
                }
                editable={false}
              />
            )}
            <TouchableOpacity
              style={styles.floatLogout}
              onPress={logoutProcess}
            >
              <AntDesign
                name="poweroff"
                size={15}
                color={GlobalVars.colorTextRed}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default index;
