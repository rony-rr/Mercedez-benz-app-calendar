import React, { useState, useEffect } from "react";

/** Utils */
import storage from "../../utils/useLocalStorage";
import fetchHook from "../../utils/useFetch";

/** Variables Globales */
import GlobalVars from "../../global/globalVars";

/** Componentes */
import Shop from "./view";

const index = ({ navigation }) => {
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

export default index;
