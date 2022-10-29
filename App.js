import React, { useState } from "react";

import useFont from "./src/utils/useFonts";

import storage from "./src/utils/useLocalStorage";

import Navigation from "./src/navigation/navigation";
import Splash from "./src/components/templates/splashLoading";

const Root = () => {
  const [loadingFonts, setLoadingFonts] = useState(null);
  useFont.loadFonts().then((res) => setLoadingFonts(res));
  // storage.clearAll();

  if (!loadingFonts) return <Splash />;

  return <Navigation />;
};

export default Root;
