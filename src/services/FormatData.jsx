 
// a function that will take in an array and a size
// this will turn the array of restaurants into a format
// where each row will have two restaurants / the first item will be an array
//                                            of two restaurant objects
// this will put list of restaurants into a 2d array
// that will be easier to loop through and turn into the desired look

export const cardGrouping = (array, size) => {

    if (array && Array.isArray(array)) {
        // reducing the total size of the list by putting them
        // into groups
        // uses inner fuction to apply to each grouping based on desired size
        return array.reduce((groups, restaurant, i) =>{
            if(i % size === 0){
                groups.push([restaurant]);
            } else {
                groups[groups.length - 1].push(restaurant)
            }
            return groups;
        }, []);

    }

}

export const findRestaurantReviews = (array, cardId) => {

    if (array && Array.isArray(array)) {
        return array.reduce((reviewList, review) =>{
            if(review.restId === cardId){
                reviewList.push(review);
            }
            return reviewList;
        }, []);

    }

}