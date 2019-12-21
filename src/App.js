import React, {Component} from 'react';
import MyNavbar from "./navbar/navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Quotes from "./quotes/quotes";
import AddQuote from "./addQuotes/addQuote";

class App extends Component {
    render() {
    return (
        <div className='container'>
            <Router>
                <MyNavbar/>
                    <Switch>
                        <Route path='/' exact component={Quotes}/>
                        <Route path='/addQuote' component={AddQuote}/>
                    </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
