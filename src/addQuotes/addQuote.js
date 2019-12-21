import React, {Component} from 'react';
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class AddQuote extends Component {
    state = {
      title:'',
      text:''
    };
    addQuote = async e => {
        e.preventDefault();
        const select = document.getElementById("exampleSelect");
        const value = select.options[select.selectedIndex].value;
        const data = {
            title: this.state.title,
            text: this.state.text,
            category: value
        };
        await axios.post('https://control-8-ramazan.firebaseio.com/quotes.json',data)
    };

    changeTitle = e => this.setState({title:e.target.value});
    changeText = e => this.setState({text:e.target.value});
    render() {
        return (
            <div>
                <Form onSubmit={this.addQuote}>
                    <FormGroup>
                        <Label for="exampleText">Autor</Label>
                        <Input type="text" name="text" value={this.state.title} onChange={this.changeTitle}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text</Label>
                        <Input type="textarea" name="text" value={this.state.text} onChange={this.changeText}/>
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

export default AddQuote;