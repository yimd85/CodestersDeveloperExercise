import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Explanation from './screens/Explanation'
import BooleanMansion from './screens/BooleanMansion';

 export default class App extends Component<{}> {
     render() {
         return (
             <BrowserRouter>
                 <Switch>
                   <Route
                     exact
                     path='/'
                     component={Welcome}
                   />
                   <Route
                     exact
                     path='/explanation'
                     component={Explanation}
                   />
                   <Route
                     exact
                     path='/booleanMansion'
                     component={BooleanMansion}
                   />
                 </Switch>
             </BrowserRouter>
         )
     }
}
