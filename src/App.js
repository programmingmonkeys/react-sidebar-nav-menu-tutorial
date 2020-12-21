import React from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import SidebarData from './components/SidebarData'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {SidebarData.map(({ path, comp }, i) => (
          <Route key={i} path={path} exact component={comp} />
        ))}
      </Switch>
    </Router>
  )
}

export default App
