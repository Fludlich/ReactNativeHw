//import react from "react";

import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreeen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude: 24.031111,
          latitude: 49.842957,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            longitude: "",
            latitude: "",
          }}
          title={"templorary text"}
        />
      </MapView>
    </View>
  );
};

export default MapScreeen;
