import React from "react";
import { cardGrouping, findRestaurantReviews } from "../services/FormatData";
import { FetchRestaurants, FetchReviews } from "../services/ReviewService";
import Card from "./Card";
import Review from "./Review";

function CardLayout(props){

    var searchMethod = 'getAll';
    var searchValue = null;

    let reviewMethod = 'getById';
    let reviewValue = null;

    if(props.cardId){
        reviewMethod = 'getById'; 
        reviewValue = props.cardId;
    }

    if(props.search){
        searchMethod = 'search';
        searchValue = props.search;
    }

    const { loading, restaurants } = FetchRestaurants(searchMethod, searchValue);
    const { loadingReviews, reviews } = FetchReviews(reviewMethod, reviewValue);

    const makeDecks = (input, size) => {
        return cardGrouping(input, size);
    }
    
    return(

        <div className='pt-3'>
            {loading && <p>loading...</p>}
            {reviewValue === null && restaurants && Array.isArray(restaurants) && makeDecks(restaurants, 2).map((deck, idx) => (
                <div key={idx} className='card-deck container-fluid pt-3 row'>
                    {deck.map((restaurant, idx) => <Card key={restaurant.id} 
                                                         info={restaurant}
                                                         findReviews={props.findReviews} 
                                                         handleRestaurantDelet={props.handleRestaurantDelete}
                                                         handleRestaurantUpdate={props.handleRestaurantUpdate}/>)}
                </div>
            ))}
            {reviewValue === null && !Array.isArray(restaurants) 
                && <h3>There are no restaurants</h3>}

            {loadingReviews && <p>loading...</p>}
            {reviewValue != null && reviews.length === 0 
                && <h3>There are no reviews for this restaurant</h3>}
            {reviewValue != null && reviews.map((review, idx) => (
                <div key={idx} className='card-deck container-fluid justify-content-center pt-3 row'>
                    <Review key={review.id} info={review} handleReviewUpdate={props.handleReviewUpdate}/>
                </div>
            ))}
        </div>

    )

}

export default CardLayout;