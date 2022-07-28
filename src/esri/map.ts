/* eslint-disable @typescript-eslint/no-unused-vars */

import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const geoJSONLayer = new GeoJSONLayer({
  url: "https://gist.githubusercontent.com/wavded/1200773/raw/e122cf709898c09758aecfef349964a8d73a83f3/sample.json",
  outFields: ["*"],
});

export function initializeMap(ref: HTMLDivElement) {
  const map = new Map({
    basemap: "topo-vector",
  });
  map.add(geoJSONLayer);
  const view = new MapView({
    container: ref,
    map: map,
    center: [-96.756771, 46.867109],
    zoom: 16,
  });

  view.on("click", (event) => {
    view.hitTest(event).then((response: any) => {
      const graphic = response.results[0].graphic;
      const attributes = graphic.attributes;
      console.log(attributes);
    });
  });

  return view;
}
