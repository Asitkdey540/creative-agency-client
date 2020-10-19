import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Dashboard/Order/Order';
import UserServiceList from './components/Dashboard/UserServiceList/UserServiceList'
import Review from './components/Dashboard/Review/Review';
import OrderedServiceList from './components/Dashboard/OrderedServiceList/OrderedServiceList'
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';



export const UserContext = createContext()



function App() {

  const [signedInUser, setSignedInUser] = useState({})


  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/userServiceList">
            <UserServiceList></UserServiceList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/orderedServiceList">
            <OrderedServiceList></OrderedServiceList>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
