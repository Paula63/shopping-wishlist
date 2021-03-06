import React from "react"
import { Container } from "react-bootstrap"
import Signup from "./Signup"
import Profile from "./Profile"
import Login from "./Login"
import Dashboard from "./Dashboard"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{maxWidth: '400px'}}>
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
              <Route path="/" component={Dashboard} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;