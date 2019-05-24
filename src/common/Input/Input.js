import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: props.value
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.value !== this.props.value){
            this.setState({
                values: this.props.value
            })
        }
    }

    render() { 
        return ( 
          
                <div className="form-group">
                    

                                   
                <label forName={this.props.id} >{this.props.name}</label>
                        <input id={this.props.id} type={this.props.type} 
                            className="form-control"
                            value={this.props.value}
                            required={this.props.required}
                            onChange={this.props.setInput}
                        />
                 </div>
                
         
         );
    }
}

Input.protoTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    setInput: PropTypes.func.isRequired,
    required: PropTypes.bool
}

Input.defaultProps = {
    required: false
}
 
export default Input;