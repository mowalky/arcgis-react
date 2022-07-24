/* eslint-disable @typescript-eslint/no-unused-vars */

import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const geoJSONLayer = new GeoJSONLayer({
  url: "https://services3.arcgis.com/aHuST0gKxItydSpZ/ArcGIS/rest/services/CAMPUS_FACILITIES_3_6/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=",
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
