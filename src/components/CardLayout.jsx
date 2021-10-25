import React from "react";
import { cardGrouping, findRestaurantReviews } from "../services/FormatData";
import Card from "./Card";
import Review from "./Review";

function CardLayout(props){

    let reviews = null;

    if(props.cardId){
        reviews = props.cardId;
    }

    const makeDecks = (input, size) => {
        return cardGrouping(input, size);
    }

    const sortReviews = (input, cardId) =>{
        return findRestaurantReviews(input, cardId);
    }

    return(

        <div className='pt-3'>
            {reviews === null && makeDecks(props.restaurant, 2).map((deck, idx) => (
                <div key={idx} className='card-deck container-fluid pt-3 row'>
                    {deck.map((restaurant, idx) => <Card key={restaurant.id} 
                                                         findReviews={props.findReviews} 
                                                         info={restaurant}/>)}
                </div>
            ))}
            {reviews != null && sortReviews(props.findReviews, props.cardId).length === 0 
                && <h3>There are no reviews for this restaurant</h3>}
            {reviews != null && sortReviews(props.findReviews, props.cardId).map((review, idx) => (
                <div key={idx} className='card-deck container-fluid justify-content-center pt-3 row'>
                    <Review key={review.id} info={review} />
                </div>
            ))}
        </div>

    )

}

export default CardLayout;