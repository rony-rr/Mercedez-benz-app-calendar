import React from "react";
import { Modal, ScrollView, View } from "react-native";

import GlobalVars from "../../../global/globalVars";

import Error from "../../atoms/labelError";
import Buttom from "../../molecules/button";

import styles from "./styles";

const Index = ({ visible, errors, onSubmit }) => {
  if (errors.length === 0) {
    return <></>;
  } else {
    return (
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.view}>
          <View style={styles.card}>
            <ScrollView style={styles.scroll}>
              {errors.map((item, index) => {
                return (
                  <Error
                    key={index.toString()}
                    data={errors[index.toString()]}
                  />
                );
              })}
              <Buttom label="Ok" onSubmit={onSubmit} />
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
};

export default Index;
