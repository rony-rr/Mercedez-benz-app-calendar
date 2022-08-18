import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, Linking } from "react-native";
import styles from "./styles";
import Image from "../../atoms/image";
import GlobalVars from "../../../global/globalVars";
import Icon from "../../atoms/icon";
import StatusBar from "../../atoms/statusBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const App = ({ visible, data, submit }) => {
  const [status, setStatus] = useState(1);

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      {visible && (
        <View style={styles.centeredView}>
          <StatusBar color="black" />
          <View style={styles.header}>
            <Text style={styles.title}>Boutique</Text>
            <TouchableOpacity onPress={() => submit()}>
              <Text style={styles.title}>Cerrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.imgContainer}>
            <Image
              width={GlobalVars.windowHeight / 2.5}
              height={GlobalVars.windowHeight / 2.5}
              img={{
                uri: `https://experienciamercedes.com/mbconnect/admin/uploads/${data.main_image}`,
              }}
            />
          </View>

          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.labelHeader}>Price: ${data.price}</Text>
          <Text style={styles.labelHeader}>{data.description}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              Linking.openURL(
                `whatsapp://send?text=Hola, quisiera más información sobre el producto: ${data.title}&phone=503 72102380`
              )
            }
          >
            <MaterialCommunityIcons name="whatsapp" size={24} color="white" />
            <Text style={styles.btnLabel}>Contactar</Text>
          </TouchableOpacity>
        </View>
      )}
    </Modal>
  );
};

export default App;
