import {Route, Switch, Redirect} from 'react-router-dom'
import AboutJob from './Components/AboutJob'
import AllJobs from './Components/AllJobs'
import Home from './Components/Home'
import ProtectedRoute from './Components/ProtectedRoute'
import NotFound from './Components/NotFound'
import LoginForm from './Components/LoginForm'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={AllJobs} />
    <ProtectedRoute exact path="/jobs/:id" component={AboutJob} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
