import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Mapbox = ({ listing }) => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (!listing) return;

        //prevent multiple map creation
        if (mapRef.current) return;

        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
        const coordinates = listing.geometry.coordinates;

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: coordinates,
            zoom: 9
        });

        new mapboxgl.Marker({ color: 'black' })
            .setLngLat(coordinates)
            .setPopup(
                new mapboxgl.Popup({ offset: 25 })
                    .setHTML(`<h4>${listing.city}</h4><p>Exact location after booking</p>`)
            )
            .addTo(mapRef.current);

        return () => {
            mapRef.current?.remove();
            mapRef.current = null;
        };

    }, [listing]); //runs only when listing changes

    return (
        <div
            ref={mapContainerRef}
            className="map-container"
            style={{ maxHeight: "400px", width: "100%" }}
        />
    );
};