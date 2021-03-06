import React from "react"
import { Container } from "react-bootstrap"
import Signup from "./Signup"
import Profile from "./Profile"
import Login from "./Login"
import Dashboard from "./Dashboard"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{maxWidth: '400px'}}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/profile" component={Profile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Dashboard} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;