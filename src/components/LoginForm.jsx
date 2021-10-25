import React, { Component } from 'react';
import '../App.css';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // id: props.account.id,
            // username: props.account.username,
            // email: props.account.email,
            // password: props.account.password
            // username: 'MyUsername1234'
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
        console.log('Submitted');
        this.props.handleCrud(this.state);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="form-style">
                    <form onSubmit={this.handleSubmit}>
                        
                        { this.props.requireUsername &&
                        <div className='row d-inline-flex'>
                            <div className="form-group col">
                                <label >Username:</label>
                                <input type="text" name="username" className="form-control" id="username" value={this.state.username} onChange={this.handleChange} required />
                            </div>    
                        </div>
                        }

                        { !this.props.isUpdating && 
                        <div className="form-group">
                            <label >Email:</label>
                            <input type="email" name="email" className="form-control" id="email" value={this.state.email} onChange={this.handleChange} required />
                        </div>
                        }
                        { this.props.isUpdating && 
                        <div className="form-group">
                            <label >Account email:</label>
                            <input type="email" name="email" className="form-control" id="email" value={this.state.email} onChange={this.handleChange} required />
                        </div>
                        }

                        { this.props.isUpdating &&
                        <div className="form-group">
                            <label >Confirm current password:</label>
                            <input type="password" name="password" className="form-control" id="password" value={this.state.password} onChange={this.handleChange} required />
                        </div>
                        }
                        { this.props.isUpdating &&
                        <div className="form-group">
                            <label >New password: (optional)</label>
                            <input type="password" name="newpassword" className="form-control" id="newpassword" value={this.state.newpassword} onChange={this.handleChange} />
                        </div>
                        }
                        { !this.props.isUpdating &&
                        <div className="form-group">
                            <label >Password:</label>
                            <input type="password" name="password" className="form-control" id="password" value={this.state.password} onChange={this.handleChange} required />
                        </div>
                        }

                        <input type="submit" value={this.props.confirmationText} className="btn btn-success" />
                    </form>

                </div>
            </div>
        );
    }
}
export default LoginForm;