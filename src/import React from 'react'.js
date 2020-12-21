import React from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import { Home, Reports, Products, Team, Messages, Support } from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/products" exact component={Products} />
        <Route path="/team" exact component={Team} />
        <Route path="/messages" exact component={Messages} />
        <Route path="/support" exact component={Support} />
      </Switch>
    </Router>
  )
}

export default App
