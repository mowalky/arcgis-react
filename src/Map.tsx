import { useEffect, useRef, useState } from "react";
import View from "@arcgis/core/views/MapView";
import { initializeMap } from "./esri/map";

export const MapView = (args: any) => {
  const mapRef = useRef() as any;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [view, setView] = useState<View | null>(null);

  useEffect(() => {
    const view = initializeMap(mapRef.current);
    setView(view);
  }, []);

  return <div className="mapDiv" ref={mapRef}></div>;
};
