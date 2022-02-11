import './App.css';
import Home from './home.js';
import Shopping from './components/scripts/shopping.js';

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
                </Switch>
            </Router>
        </>
    )
}

export default App;
