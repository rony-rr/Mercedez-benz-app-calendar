import React from "react";
import { Modal, ScrollView, View } from "react-native";
import Loading from "../../atoms/loading";
import GlobalVars from "../../../global/globalVars";
import styles from "./styles";
import Error from "../../atoms/labelError"
import Buttom from "../../molecules/button"
const index = ({visible ,errors,onSubmit}) => {

  if (errors.length === 0){
    return <></>
  }else{
    return (
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.view}>
          <View style={styles.card}>
          <ScrollView style={styles.scroll}>
              {errors.map((item,index)=>{
                return <Error key={index.toString()} data={errors[index.toString()]} />
              })}
               <Buttom label="Ok" onSubmit={onSubmit}/>
          </ScrollView>
         
          </View>
        </View>
      </Modal>
    );
  }

  
};

export default index;
