import React, {Component} from 'react';
import axios from "axios";
import Quote from "./quote/quote";
import Category from "../categories/category/category";
import { ListGroup} from 'reactstrap';

class Quotes extends Component {
    state = {
        quotes: [],
    };

    addInfo = async () => {
        let url = 'https://control-8-ramazan.firebaseio.com/quotes.json';
        if(this.props.match.params.name){
            url += '?orderBy="category"&equalTo="'+this.props.match.params.name+'"'
        }
        console.log(this.props.match.params.name);
        const dataQuotes = await axios.get(url);
        this.setState({quotes: dataQuotes.data})
    };

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.name !== this.props.match.params.name){
            return this.addInfo()
        }
    }

    componentDidMount() {
        this.addInfo();
    }

    async shouldComponentUpdate() {
    };
    render() {
        let categories = [
            {title:'StarWars',id:'StarWars'},
            {title:'FamousePeople',id:'FamousePeople'},
            {title:'Saying',id:'Saying'},
            {title:'Humour',id:'Humour'},
            {title:'Motivational',id:'Motivational'},
        ];
        let list = null;
        if(this.state.quotes !== null){
             list = Object.keys(this.state.quotes).map(elem=> (
                <Quote
                    key={elem}
                    id={elem}
                    reset={this.addInfo}
                    title={this.state.quotes[elem].title}
                    text={this.state.quotes[elem].text}
                />
            ));
        }
        categories = categories.map(elem=> <Category key={elem.title} title={elem.title}/>);


        return (
            <div>
                <ListGroup>
                    <Category title="All"/>
                    {categories}
                </ListGroup>
                <div style={{display: 'inline-block', width: '100%'}}>{list !== null && list.reverse()}</div>
            </div>
        );
    }
}

export default Quotes;