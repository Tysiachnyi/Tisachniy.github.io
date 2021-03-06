import React, {Component} from 'react';
import Popup from "reactjs-popup";

export default class ItemAddForm extends Component{

    render(){
        return(
            <div className="container">
            <button 
            type="button" 
            className="btn btn-outline-primary"
            onClick={() => this.props.onItemAdded(prompt("Enter the name").toString(),prompt("and Score").toString())}>
                <i class="fa fa-plus" aria-hidden="true"></i>
                <span>     </span>
                <i class="fa fa-user" aria-hidden="true"></i>
            </button>
            </div>
        )
    }
}