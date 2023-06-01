import React, { useState, useEffect } from "react";

/** Variables Globales */
import GlobalVars from "../../global/globalVars";

/** Utils */
import storage from "../../utils/useLocalStorage";
import fetchHook from "../../utils/useFetch";

/** Componentes */
import Shop from "./view";

const Index = ({ navigation }) => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    getToken("userToken");
  }, []);

  const getToken = async (key) => {
    try {
      const response = await storage.getItem(key);
      if (response !== null) {
        getProducts(response);
      } else {
        navigation.navigate("login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async (token) => {
    const urlProducts = `${GlobalVars.urlApi}products`;
    try {
      const response = await fetchHook.fetchGet(urlProducts, token);
      if (response.status) {
        setDataProduct(response.products);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <Shop data={dataProduct} />;
};

export default Index;
