import React from "react";
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto  } from './styles';

const RestaurantCard = () => {
return(
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars 
                count={5} 
                value ={4}
                isHalf={true} 
                edit={false} 
                activeColor="#e7711c"
            />
            <Address>Rua Rio de Janeiro 120</Address>
        </RestaurantInfo>
        
        <RestaurantPhoto src={restaurante} alt = "foto do restaurante"/>
    </Restaurant>
    );
};
export default RestaurantCard;