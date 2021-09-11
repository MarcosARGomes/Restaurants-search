import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

import { setRestaurant, setRestaurants} from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
    const dispatch = useDispatch();
    const {restaurants} = useSelector((state) => state.restaurant);
    const [map, setMap] = useState(null);
    const {google, query} = props;

    useEffect(() =>{
        if (query){
            searchByQuery(query);
        }
    },[query]);

    function searchByQuery(query) {
        const service = new google.maps.places.PlacesService(map); 

        const request = {
            location: map.center,
            radius:'200', /*pega os restaurantes em ate 20 mil metros do local do usuário */
            type: ['restaurant'], /*pegar somente os lugares cadastrados como type restaurantes*/
            query,
        };

        service.textSearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                dispatch(setRestaurants(results));
                
            }
        });
    }

    function searchNearby(map, center){
        const service = new google.maps.places.PlacesService(map); 

        const request = {
            location: center,
            radius:'20000', /*pega os restaurantes em ate 20 mil metros do local do usuário */
            type: ['restaurant'], /*pegar somente os lugares cadastrados como type restaurantes*/
        };

        service.nearbySearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                 dispatch(setRestaurants(results));
            }
        });
    }

    function onMapReady(_, map){
        setMap(map);
        searchNearby(map, map.center);
    }

    return(
        <Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady}> /*Responsavel por buscar a localicação atual do usuário */
            {restaurants.map((restaurant) => (
                <Marker 
                    key={restaurant.place.id} 
                    name={restaurant.name} 
                    position={{
                    lat: restaurant.geometry.location.lat(),
                    lng: restaurant.geometry.location.lng(),
                    }}
                />
            ))}
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR',
})(MapContainer);

