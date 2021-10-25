import React from "react";
import CardLayout from "./CardLayout";

function CardInterface(props){

    return(
        <div className='container-fluid' >
            {!props.cardId && <CardLayout restaurant={props.restaurant} 
                                           findReviews={props.findReviews}/>}
            {props.cardId && <CardLayout cardId={props.cardId} 
                                          findReviews={props.findReviews} />}
        </div>
    )

}

export default CardInterface;