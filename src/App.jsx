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
        <HomePage />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:category" component={ShowPage}></Route>
          <Route exact path="/pizza" component={SingleShow}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
