import '../../styles/orders/order.css';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix Leaflet's default marker icon path issue in React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Helper component to smoothly re-center the map on address select
function MapRecenter({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 14);
  }, [center, map]);
  return null;
}

// 1. Updated prop from { close } to { onClose } to match Home.jsx
function Order({ onClose }) {
    const [orderMode, setOrderMode] = useState("pickup");
    const [coords, setCoords] = useState([37.7749, -122.4194]); // Default Lat/Lng

    // Request user's current geolocation on mount
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCoords([latitude, longitude]);
                },
                (error) => {
                    console.warn("Geolocation permission denied or unavailable, using fallback coordinates:", error.message);
                },
                { enableHighAccuracy: true, timeout: 5000 }
            );
        }
    }, []);
    
    const pickupClickHandler = () => {
        setOrderMode("pickup");
    };

    const deliveryClickHandler = () => {
        setOrderMode("delivery");
    };

    return (
        /* 2. Added onClick={onClose} to close when clicking outside modal */
        <div className='modal-overlay' onClick={onClose}>
            {/* 3. Added stopPropagation to prevent modal body clicks from closing it */}
            <div className='modal' onClick={(e) => e.stopPropagation()}> 
                <span onClick={onClose} className="close"> &times; </span>
                
                <div className='search'>
                    <h2 className='header'>order now</h2>

                    {/* Pickup vs Delivery Toggle */}
                    <div className='buttons'>
                        <button 
                            type="button"
                            className={
                                orderMode === "pickup"
                                ? "order-button order-button-selected"
                                : "order-button"
                            }
                            onClick={pickupClickHandler}
                            id="pickup"
                        > pickup </button>
                        <button 
                            type="button"
                            className={
                                orderMode === "delivery"
                                ? "order-button order-button-selected"
                                : "order-button"
                            }
                            onClick={deliveryClickHandler}
                        > delivery </button>
                    </div>

                    {/* Location Input */}
                    <div className='pvd-input'>
                        <p> 
                        {orderMode === "pickup"
                            ? "pick up at a location near you:"
                            : "enter your address:"}
                        </p>
                        <input 
                            type="text"
                            name="location"
                            placeholder={
                                orderMode === "pickup"
                                    ? "enter city, state, or zip code"
                                    : "enter address"
                            }
                        />
                    </div>
                </div>

                {/* Map View */}
                <div className="map-container">
                    <MapContainer center={coords} zoom={12} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        />
                        <Marker position={coords} icon={customIcon} />
                        <MapRecenter center={coords} />
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default Order;