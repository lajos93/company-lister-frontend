import axios from "axios";
import { useEffect, useState } from "react";

import ItemDetail from "./Components/Item/ItemDetail/ItemDetail";
import Map from "./Pages/Map/Map";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  const selectItemHandle = (val) => {
    setSelectedItem(val);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/search/győrújbarát").then((res) => {
      setData(res.data[0].data);
    });
  }, []);

  return (
    <>
      <ItemDetail selectedItem={selectedItem} />
      <Map data={data} selectItem={selectItemHandle} />
    </>
  );
};

export default App;
