import React, {Component} from 'react';
import './quote.css'
import axios from "axios";
import {NavLink} from "react-router-dom";

class Quote extends Component {
    delete = async () => {
        await axios.delete('https://control-8-ramazan.firebaseio.com/quotes/'+this.props.id+'.json')
        this.props.reset()
    };
    render() {
        return (
            <div className="quote">
                <span className="quote-text">"{this.props.text}"</span>
                <span className="quote-title">{this.props.title}</span>
                <span className="quote-edit"><NavLink to={'/quotes/'+this.props.id}><button>Edit</button></NavLink></span>
                <span onClick={this.delete} className="quote-delete"><button>Х</button></span>
            </div>
        );
    }
}

export default Quote;