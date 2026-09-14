import '../styles/order.css'
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix Leaflet's default marker icon path issue in React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

/**
 * 
 * @component This component renders the order now modal.
 * User can choose to pick up their order or have it delivered to their address. 
 */

/**
 * 
 * Incorporating a map when the user searches for their address or store location
 */

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

function Order({close}) {
    // usestates for the pickup/delivery options 
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
    
    /**
     * for pick up v delivery button controls
     */
    const pickupClickHandler = () => {
        setOrderMode("pickup");
    }

    const deliveryClickHandler = () => {
        setOrderMode("delivery");
    };

    return (
        <div>
            <div className='modal-overlay'>
                <div className='modal'> 
                    <span onClick={close} className="close"> &times; </span>
                    
                    <div className='search'>
                        <h2 className='header'>order now</h2>

                        {/* buttons pickup vs delivery*/}
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

                        {/* location inputting settings */}
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

                    {/* Right Column: Free OpenStreetMap Container 
                        Map is not connecting to the search bar
                    */}
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
        </div>
    )
}

export default Order;