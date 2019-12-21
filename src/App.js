import React, {Component} from 'react';
import MyNavbar from "./components/navbar/navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Quotes from "./components/quotes/quotes";
import AddQuote from "./components/addQuotes/addQuote";
import EditQuote from "./components/editQuote/editQuote";

class App extends Component {
    render() {
    return (
        <div className='container'>
            <Router>
                <MyNavbar/>
                    <Switch>
                        <Route path='/' exact render={()=><p>Home page</p>} />
                        <Route path='/quotes/edit/:id' component={EditQuote}/>
                        <Route path='/quotes/:name' component={Quotes}/>
                        <Route path='/quotes' component={Quotes}/>
                        <Route path='/addQuote' component={AddQuote}/>
                    </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
