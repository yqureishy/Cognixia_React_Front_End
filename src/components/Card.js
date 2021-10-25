import React from "react";

function Card (props){

    const HandleClick = (e) => {
        e.preventDefault();
        props.findReviews(props.info.id, true);
    }

    return(
        <div onClick={HandleClick}
                style={{ cursor: "pointer" }} 
                className="card bg-secondary text-green rounded col-lg-8 col-12 col-md-12"
                id={'card ' + props.info.id}>

            <Header name={props.info.name} />
            <Body rating ={props.info.rating} address={props.info.address} 
                            phone={props.info.phone} description={props.info.description} />
        </div>
    );
}

function Header(props) {
        return(
            <div className="card-header">
                <h3><b>{props.name}</b></h3> 
            </div>
        );
}

function Body(props) {
    return(
        <div className="card-body">
            <p><b>{props.rating}/5 Stars</b></p>
            <p>{props.address}</p>
            <p>{props.phone}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;