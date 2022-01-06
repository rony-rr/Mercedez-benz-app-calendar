import React, { useState } from "react";
import useFont from "./src/utils/useFonts";
import Splash from "./src/components/templates/splashLoading";
import Navigation from "./src/navigation/navigation";
import storage from "./src/utils/useLocalStorage";
const Root = () => {
  const [loadingFonts, setLoadingFonts] = useState(null);
  useFont.loadFonts().then((res) => setLoadingFonts(res));
  // storage.clearAll();

  if (!loadingFonts) return <Splash />;

  return <Navigation />;
};

export default Root;
