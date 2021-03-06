import React, {Component} from 'react';
import axios from "axios";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class EditQuote extends Component {
    state = {
        quote: {category:'StarWars',title:'',text:''}
    };

    async componentDidMount() {
        const data = await axios.get('https://control-8-ramazan.firebaseio.com/quotes/'+this.props.match.params.id+'.json');
        this.setState({quote:data.data});
    }

    changeText = e => {
        const state = this.state.quote;
        state.text = e.target.value;
        this.setState({quote:state})
    };
    changeTitle = e => {
        const state = this.state.quote;
        state.title = e.target.value;
        this.setState({quote:state})
    };

    editQuote = async e => {
        e.preventDefault();
        const select = document.getElementById("exampleSelect");
        const value = select.options[select.selectedIndex].value;
        const date = {...this.state.quote, category: value}
        await axios.put('https://control-8-ramazan.firebaseio.com/quotes/'+this.props.match.params.id+'.json', date)
        this.props.history.push('/quotes')
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.editQuote}>
                    <FormGroup>
                        <Label for="exampleText">Autor</Label>
                        <Input type="text" name="text" value={this.state.quote.title} onChange={this.changeTitle}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text</Label>
                        <Input type="textarea" name="text" value={this.state.quote.text} onChange={this.changeText}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Category</Label>
                        <Input className='categoryes' type="select" name="select" id="exampleSelect">
                            <option>StarWars</option>
                            <option>FamousePeople</option>
                            <option>Saying</option>
                            <option>Humour</option>
                            <option>Motivational</option>
                        </Input>
                    </FormGroup>
                        <Button>ADD</Button>
                </Form>
            </div>
        );
    }
}

export default EditQuote;