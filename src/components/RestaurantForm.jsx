import React, { Component } from 'react';

class RestaurantForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.restaurant.id,
            name: props.restaurant.name,
            rating: props.restaurant.rating,
            address: props.restaurant.address,
            description: props.restaurant.description
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
                                <label >Name:</label>
                                <input type="text" name="Name" className="form-control" id="Name" value={this.state.name} onChange={this.handleChange} required />
                            </div>

                            <div className="form-group col">
                                <label >Rating:</label>
                                <input type="text" name="rating" className="form-control" id="rating" value={this.state.rating} onChange={this.handleChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label >Address:</label>
                            <input type="text" name="address" className="form-control" id="address" value={this.state.address} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                            <label >Description:</label>
                            <input type="text" name="description" className="form-control" id="description" value={this.state.description} onChange={this.handleChange} required />
                        </div>

                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>

                </div>
            </div>
        );
    }
}
export default RestaurantForm;