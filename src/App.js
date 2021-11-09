import { useState } from "react";

import SideSection from "./Components/SideSection/SideSection";
import Map from "./Pages/Map/Map";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  const selectItemHandle = (val) => {
    setSelectedItem(val);
  };

  const searchResultHandle = (val) => {
    setData(val);
  };

  return (
    <>
      <SideSection
        selectedItem={selectedItem}
        searchResult={searchResultHandle}
      />
      <Map data={data} selectItem={selectItemHandle} />
    </>
  );
};

export default App;
