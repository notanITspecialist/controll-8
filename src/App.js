import React, {Component} from 'react';
import MyNavbar from "./navbar/navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Quotes from "./quotes/quotes";
import AddQuote from "./addQuotes/addQuote";
import EditQuote from "./editQuote/editQuote";

class App extends Component {
    render() {
    return (
        <div className='container'>
            <Router>
                <MyNavbar/>
                    <Switch>
                        <Route path='/quotes' exact component={Quotes}/>
                        <Route path='/quotes/:id' component={EditQuote}/>
                        <Route path='/addQuote' component={AddQuote}/>
                        <Route path='/quotes/:name' component={Quotes}/>
                    </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
