import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ShowPage from './pages/ShowPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:id" component={ShowPage}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
