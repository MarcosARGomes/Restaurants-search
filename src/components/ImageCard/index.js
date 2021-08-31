import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    justify-content: center;
    padding: 2px;
    width: 90px;
    height: 90px;
    border-radius:6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    
`;

const Title = styled.span`
    font-family: ${(props)=> props.theme.regurar};
    color:#ffffff;
    font: 16px;
    margin-top: 10px;
    margin-left: 10px;
`;

 const ImageCard = ({photo, title}) => {
    return(
        <Card photo={photo}> 
             <Title>{title}</Title>
        </Card>

    );
};
export default ImageCard;