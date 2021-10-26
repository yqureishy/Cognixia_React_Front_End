import React from "react";
import FormModalReview from "./FormModelReview";

function Review (props){

    return(
        <div className="card bg-secondary text-green rounded col-lg-8 col-12 col-md-12" id={'card ' + props.info.id}>
            <Header title={props.info.title} />
            <Body body={props.info.body} rating={props.info.rating} />
            { props.role === 'user' ? <Footer review={props.info} handleReviewUpdate={props.handleReviewUpdate} /> : <div></div> }
        </div>
    )

}

function Header(props){
    return(
        <div className="card-header">
            <h3><b>{props.title}</b></h3>
        </div>
    )
}

function Body(props){
    return(
        <div className="card-body">
            <p>{props.body}</p>
            <h4>{props.rating}/5 Stars</h4>
        </div>
    )
}

function Footer(props) {
    return(
        <div className="card-footer btn-group">
            <FormModalReview type='update' review={props.review} handleUpdate={props.handleUpdate}/>
        </div>
    )
}

export default Review;