import './App.css';
import Home from './home.js';
import Shopping from './components/scripts/shopping.js';
import Account from './components/scripts/account.js';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App(){
    return (
        <>
            <Router>
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/shopping">
                        <Shopping />
                    </Route>

                    <Route path="/account">
                        <Account />
                    </Route>

                </Switch>
            </Router>
        </>
    )
}

export default App;
