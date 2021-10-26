
import React from "react";
import { deleteRestaurant, updateRestaurant, updateReview } from "../services/ReviewService";
import CardLayout from "./CardLayout";

function CardInterface(props){

    const handleRestaurantDelete = (id) => {
        let ok = window.confirm('Are you sure you want to delete this restaurant\nPress "OK" to confirm');
        if(ok === true){
            var removeCard = document.getElementById('card' + id);
            removeCard.parentNode.removeChild(removeCard);
            deleteRestaurant(id);
            window.alert('Restaurant has been deleted');
        }
    }

    const handleRestaurantUpdate = (restaurant) => {
        updateRestaurant(restaurant);
    }

    const handleReviewUpdate = (review) => {
        updateReview(review);
    }

    return(
        <div className='container-fluid' >
            {!props.cardId && !props.search && 
                <CardLayout search={false}
                            cardId={false}
                            handleRestaurantDelete={handleRestaurantDelete}
                            handleRestaurantUpdate={handleRestaurantUpdate} 
                            findReviews={props.findReviews}/>}
            {!props.cardId && props.search && 
                <CardLayout restaurant={props.restaurant}
                            search={props.search}
                            cardId={false}
                            handleRestaurantDelete={handleRestaurantDelete}
                            handleRestaurantUpdate={handleRestaurantUpdate} 
                            findReviews={props.findReviews}/>}

            {props.cardId && 
                <CardLayout cardId={props.cardId}
                    search={false}
                    handleReviewUpdate={handleReviewUpdate} />}
        </div>
    )

}


export default CardInterface;