import React, { useEffect, useState } from "react";
import storage from "../../utils/useLocalStorage";
import Splash from "../../components/templates/splashLoading";

const index = ({ navigation }) => {
  const [verificandoAuth, setVerificandoAuth] = useState(null);

  useEffect(() => {
    getToken("userToken");
  }, []);

  const getToken = async (key) => {
    try {
      const response = await storage.getItem(key);
      if (response !== null) {
        console.log(response)
        navigation.navigate("TabNavigation");
      } else {
        navigation.navigate("login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (verificandoAuth == null) return <Splash />;
};

export default index;
