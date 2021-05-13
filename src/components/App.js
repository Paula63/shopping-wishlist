import React from "react";
import { ToastContainer } from 'react-toastify';
import Signup from "./Signup";
import Profile from "./profile/Profile";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./profile/UpdateProfile";
import Landing from "./Landing";
import Setting from "./Setting";
import WishboardHome from './wish-boards/WishboardHome';
import NewBoardForm from './wish-boards/NewBoardForm';
import Items from './items/Items';
import ViewAll from './items/ViewAll';
import NewItemForm from './items/NewItemForm';
import ManageItemHome from './items/ManageItemHome';
import Sandbox from "./sandbox/Sandbox";
import Services from "./footer/Services";
import HowItWorks from "./footer/HowItWorks";
import ContactUs from "./footer/ContactUs";
import Support from "./footer/Support";
import Tips from "./footer/Tips";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <>
        <ToastContainer position='bottom-right' />
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              {/* 
                Change the route of this to PrivateRoute to ensure that the user 
                can't access app without a valid account 
              */}
              <Route exact path="/" component={Dashboard} />
              <Route path="/main" component={Landing} />
              <Route path="/sandbox" component={Sandbox} />
              <Route path="/services" component={Services} />
              <Route path="/works" component={HowItWorks} />
              <Route path="/contact" component={ContactUs} />
              <Route path="/support" component={Support} />
              <Route path="/tips" component={Tips} />
              <PrivateRoute exact path="/settings" component={Setting} />
              <PrivateRoute exact path="/boards" component={WishboardHome} />
              <PrivateRoute exact path="/boards/new-board" component={NewBoardForm} />
              <PrivateRoute exact path="/boards/:id" component={Items} />
              <PrivateRoute exact path="/view-all-items" component={ViewAll} />
              <PrivateRoute exact path="/boards/items/new-item" component={NewItemForm} />
              <PrivateRoute exact path="/boards/items/manage" component={ManageItemHome} />
            </Switch>
          </AuthProvider>
        </Router>
      </>
  )
}

export default App;