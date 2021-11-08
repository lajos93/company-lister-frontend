import { useMemo } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { useState } from "react/cjs/react.development";
import ItemSingular from "../../Components/Item/ItemSingular/ItemSingular";

const Map = (props) => {
  //const [selectedItem, setSelectedItem] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: 17.6365045,
    latitude: 47.6187048,
    zoom: 7,
  });
  const selectItem = (item) => {
    props.selectItem(item);
  };

  const deselectItem = () => {
    props.selectItem(null);
  };

  const itemHasLonLat = (data) => {
    return data.filter((item) => !!item.address.raw);
  };

  const itemHasNoLonLat = (data) => {
    return data.filter((item) => !item.address.raw);
  };

  // Only rerender markers if props.data has changed
  const markers = useMemo(
    () =>
      itemHasLonLat(props.data).map((item, i) => (
        <Marker
          key={item._id}
          longitude={item.address.raw.longt}
          latitude={item.address.raw.lat}
        >
          <button onClick={() => selectItem(item)}>
            <ItemSingular />
          </button>
        </Marker>
      )),
    [props.data]
  );
  return (
    <>
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...viewport}
        width="100vw"
        height="100vh"
        onViewportChange={setViewport}
        onClick={deselectItem}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {markers}
      </ReactMapGL>
    </>
  );
};

export default Map;
