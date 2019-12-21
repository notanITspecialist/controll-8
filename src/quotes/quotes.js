import React, {Component} from 'react';
import axios from "axios";
import Quote from "./quote/quote";

class Quotes extends Component {
    state = {
        quotes: []
    };

    addQuotes = async () => {
        const data = await axios('https://control-8-ramazan.firebaseio.com/quotes.json');
        this.setState({quotes: data.data})
    };

    componentDidMount() {
        this.addQuotes()
    }

    async shouldComponentUpdate() {
    };
    render() {
        const list = Object.keys(this.state.quotes).map(elem=> <Quote text={this.state.quotes[elem].text}/>);

        return (
            <div>
                {list.reverse()}
            </div>
        );
    }
}

export default Quotes;