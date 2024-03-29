import React, { useEffect, useState } from "react";

import storage from "../../utils/useLocalStorage";
import Splash from "../../components/templates/splashLoading";

const Index = ({ navigation }) => {
  const [verificandoAuth, setVerificandoAuth] = useState(null);

  useEffect(() => {
    getToken("userToken");
  }, []);

  const getToken = async (key) => {
    try {
      const response = await storage.getItem(key);
      if (response !== null) {
        navigation.navigate("TabNavigation");
      } else {
        navigation.navigate("account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!verificandoAuth) return <Splash />;
};

export default Index;
