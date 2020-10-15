import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/orphanages-map.css";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
  id: number;
  longitude: number;
  latitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("/orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div className='page-map'>
      <aside>
        <header>
          <Link to='/'>
            <img src={mapMarkerImg} alt='Happy' />
          </Link>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita </p>
        </header>

        <footer>
          <strong>Barueri</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.4979812, -46.8669324]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v4/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map((orphanage) => {
          return (
            <Marker
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className='map-popup'
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color='#fff' />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to='/orphanages/create' className='create-orphanage'>
        <FiPlus size={32} color='#fff' />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
