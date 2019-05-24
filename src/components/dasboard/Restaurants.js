import React, { Component } from 'react'

class Restaurant extends Component {
    
    render() {
        return (
          
               
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                            <img className="img-thumbnail rounded" src={this.props.restaurants.image} alt="" />
                                <h5 className="card-title">{this.props.restaurants.name}</h5>
                                <p className="card-text">{this.props.restaurants.description}</p>
                                <a href="/" className="btn btn-primary" id={this.props.restaurants._id}>Go somewhere</a>
                            </div>
                        </div>
                    </div>
              
           
        )
    }
}
export default Restaurant;