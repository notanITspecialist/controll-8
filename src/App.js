import React, {Component} from 'react';
import axios from 'axios'
import MyNavbar from "./navbar/navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Quotes from "./quotes/quotes";

class App extends Component {
    add = () =>{
        const categ = {
            All:[0],
            StarWars:[1],
            FamousePeople:[2],
            Saying:[3],
            Humour:[4],
            Motivational:[5]
            };
        axios.post('https://control-8-ramazan.firebaseio.com/categories.json', categ)
    };

    render() {
    return (
        <div className='container'>
            <Router>
                <MyNavbar/>
                    <Switch>
                        <Route path='/' exact component={Quotes}/>
                    </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
