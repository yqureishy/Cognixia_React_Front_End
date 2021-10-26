import React, { Component } from 'react';
import './form.css';

class ReviewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.review.id,
            title: props.review.title,
            body: props.review.body,
            rating: props.review.rating,
            userId: props.review.userId,
            restaurantId: props.review.restaurantId
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    handleSubmit = (event) => {
        console.log('submit');
        this.props.handleCrud(this.state);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="form-style">
                    {this.state.id && <h3>{'Changes for ' + this.state.name}</h3>}
                    <form onSubmit={this.handleSubmit}>
                        <div className='row d-inline-flex'>
                            <div className="form-group col">
                                <label >Title:</label>
                                <input type="text" name="title" className="form-control" id="title" value={this.state.title} onChange={this.handleChange} required />
                            </div>

                            <div className="form-group col">
                                <label >Rating:</label>
                                <input type="text" name="rating" className="form-control" id="rating" value={this.state.rating} onChange={this.handleChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Body:</label>
                            <input type="text" name="body" className="form-control" id="body" value={this.state.body} onChange={this.handleChange} required />
                        </div>

                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>

                </div>
            </div>
        );
    }
}
export default ReviewForm;