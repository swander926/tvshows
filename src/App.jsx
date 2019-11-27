import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ShowPage from './pages/ShowPage'
import NotFound from './pages/NotFound'
import SingleShow from './components/Shows'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:id" component={ShowPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
