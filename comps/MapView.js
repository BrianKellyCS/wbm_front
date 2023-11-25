import React, { useState } from "react";
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import styles from "../styles/MapView.module.css";
import { devices } from "../aaa_samples/devices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryQuarter, faTrash } from '@fortawesome/free-solid-svg-icons';


function MapView() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [view, setView] = useState('map'); // 'map' or 'list'
  const zoomDistance = 16;
  const mapWidth = "800px";
  const mapHeight = "800px";
  const mapCenter = {
    lat: 34.242245312686954,
    lng: -118.53043313617162,
  };
  const mapOptions = {
    disableDefaultUI: true,
    clickableIcons: true,
    scrollwheel: true,
  };
  const libraries = ["places"];
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    libraries: libraries,
  });

  const handleMarkerClick = (device) => {
    setSelectedMarker(device);
  };

  // Function to determine the marker icon based on the bin's level and battery
  const getMarkerIcon = (level, battery) => {
    const color = getStatusColor(level, battery);
    // Return the marker configuration with the determined color
    return {
      path: window.google.maps.SymbolPath.CIRCLE,
      fillColor: color,
      fillOpacity: 0.9,
      scale: 8,
      strokeColor: 'white',
      strokeWeight: 2,
    };
  };

    //display list view
    const [activeDevice, setActiveDevice] = useState(null); // To track the active device for submenu


  const renderStatusIcons = (level, battery) => {
    const icons = [];
    if (battery <= 25) {
      icons.push(
        <FontAwesomeIcon 
          key="battery" 
          icon={faBatteryQuarter} 
          className={styles.icon} 
        />
      ); // Low battery icon
    }
    if (level >= 80) {
      icons.push(
        <FontAwesomeIcon 
          key="bin" 
          icon={faTrash} 
          className={styles.icon} 
        />
      ); // Full bin icon
    }
    return icons;
  };


  // Updated function to determine the class based on device's level and battery
  const getListItemClass = (level, battery) => {
    if (level >= 80 && battery <= 25) {
      return styles.list_item_critical; // Both full bin and low battery
    } else if (level >= 80) {
      return styles.list_item_full; // Full bin
    } else if (battery <= 25) {
      return styles.list_item_low_battery; // Low battery
    } else {
      return styles.list_item_ok; // No issues
    }
  };


  const getStatusColor = (level, battery) => {
    if (level >= 80 && battery <= 25) {
      return 'orange'; // Both full bin and low battery
    } else if (level >= 80) {
      return 'red'; // Full bin
    } else if (battery <= 25) {
      return 'yellow'; // Low battery
    } else {
      return 'green'; // No issues
    }
  };
  



    const renderListView = () => (
      <div className={styles.list_container}>
        {devices.map((device) => (
          <div
            key={device.id}
            className={`${styles.list_item} ${getListItemClass(device.level, device.battery)}`}
            onClick={() => setActiveDevice(activeDevice === device.id ? null : device.id)}
          >
            <div className={styles.list_item_icons}>
              {renderStatusIcons(device.level, device.battery)}
            </div>
            <div className={styles.list_item_details}>
              <p>ID: {device.id}</p>
              <p>Battery: {device.battery}%</p>
              <p>Level: {device.level}%</p>
            </div>
            {activeDevice === device.id && (
              <div className={styles.submenu}>
                <button className={styles.submenu_button}>Submit Feedback</button>
                <button className={styles.submenu_button}>View Historical Data</button>
              </div>
            )}
          </div>
        ))}
      </div>
    );



    
  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.map_container}>
      <div className={styles.view_toggle}>
        <button onClick={() => setView('map')} className={view === 'map' ? styles.active : ''}>Map View</button>
        <button onClick={() => setView('list')} className={view === 'list' ? styles.active : ''}>List View</button>
      </div>
      {view === 'map' ? (
        <div style={{ width: mapWidth, height: mapHeight }}>
          <GoogleMap
            options={mapOptions}
            zoom={zoomDistance}
            center={mapCenter}
            mapTypeId={window.google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: mapWidth, height: mapHeight }}
          >
            {devices.map((device) => {
              const icon = getMarkerIcon(device.level, device.battery);
              return (
                <React.Fragment key={device.id}>
                  <MarkerF
                    position={{ lat: device.lat, lng: device.lng }}
                    icon={icon}
                    onClick={() => handleMarkerClick(device)}
                  />
                  {selectedMarker === device && (
                    <InfoWindowF
                      position={{ lat: device.lat, lng: device.lng }}
                      onCloseClick={() => setSelectedMarker(null)}
                    >
                      <div className={styles.infoWindow}>
                        {renderStatusIcons(device.level, device.battery)}
                        <p>ID: {device.id}</p>
                        <p>Battery: {device.battery}%</p>
                        <p>Level: {device.level}%</p>
                        <button className={styles.infoButton}>Submit Feedback</button>
                        <button className={styles.infoButton}>View Historical Data</button>
                      </div>
                    </InfoWindowF>
                  )}
                </React.Fragment>
              );
            })}
          </GoogleMap>
        </div>
      ) : renderListView()}
    </div>
  );
}

export default MapView;
