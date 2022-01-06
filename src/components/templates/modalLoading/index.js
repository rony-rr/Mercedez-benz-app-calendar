import React from "react";
import { Modal, View } from "react-native";
import Loading from "../../atoms/loading";
import GlobalVars from "../../../global/globalVars";
import styles from "./styles";

const index = (props) => {
  const { openModal } = props;

  return (
    <Modal animationType="slide" transparent={true} visible={openModal}>
      <View style={styles.view}>
        <Loading size="small" color={GlobalVars.white} />
      </View>
    </Modal>
  );
};

export default index;
