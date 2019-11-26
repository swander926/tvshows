import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Shows from '../components/Shows'
import ShowPage from './ShowPage'
import NotFound from './NotFound'
import axios from 'axios'

const HomePage = () => {
  const [shows, setShows] = useState([])

  const getDataFromApi = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=0bc0728f34b625ce3a0ce16d93e6973e&language=en-US&page=1'
    )
    console.log(resp)
    setShows(resp.data.results)
  }
  useEffect(() => {
    getDataFromApi()
  }, [])
  return (
    <>
      <Router>
        <header>
          <h1>Top Rated TV Shows</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Back To Home</Link>
              </li>
              <li>
                <Link to="/1">Rick and Morty</Link>
              </li>
              {shows.map(Shows => {
                return (
                  <>
                    {/* <ShowPage
                    key={Shows.id}
                    title={Shows.original_name}
                    overview={Shows.overview}
                    image={Shows.poster_path}
                  /> */}
                  </>
                )
              })}
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/1" component={ShowPage}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default HomePage
