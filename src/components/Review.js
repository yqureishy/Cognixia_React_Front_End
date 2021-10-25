import React from "react";

function Review (props){

    return(
        <div className="card bg-secondary text-green rounded col-lg-8 col-12 col-md-12" id={'card ' + props.info.id}>
            <Header title={props.info.title} />
            <Body body={props.info.body} />
            <Footer rating={props.info.rating} />
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
        </div>
    )
}

function Footer(props) {
    return(
        <div className="card-footer">
            <h4>{props.rating}</h4>
        </div>
    )
}

export default Review;