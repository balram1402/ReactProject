import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Prof from './Pro';
import Servs from './Services';
import Navs from "./Navs";
import fb from './fb.svg';
import Home from './Home';

function App(){
    return(
        <>

            <Switch>

                <Route exact path = '/' component={Home}/>
                <Route exact path = "/profile" component = {Prof}/>
                <Route exact path = "/services" component= {Servs} />

            </Switch>

        </>

    )
}
export default App;