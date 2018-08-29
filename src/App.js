import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import LoginScreen from './Routes/Login/LoginScreen'
import InventoryScreen from './Routes/Inventory/InventoryScreen'
import vAtomScreen from './Routes/vAtom/vAtomScreen'
import RegisterScreen from './Routes/Register/RegisterScreen'
import ProfileScreen from './Routes/Profile/ProfileScreen';


var About = props => <div>My App</div>

class App extends Component {
  
  componentWillMount(){
    
  }

  componentDidMount(){
   
  }

  render() {
    return (
      <div className="App">
        <header>

        </header>
        <HashRouter>
          <Switch>


            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/inventory' component={InventoryScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/vatom/:id' component={vAtomScreen} />
            <Route path='/logout' component={e => <div>Logout will occur here!</div>} />
            <Route component={LoginScreen} />
          </Switch>
        </HashRouter>
        
        
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default App;

