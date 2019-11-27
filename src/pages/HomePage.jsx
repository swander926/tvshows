import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ShowPage from './ShowPage'
import NotFound from './NotFound'
import axios from 'axios'
import Shows from '../components/Shows'
// import SingleShow from '../components/SingleShow'

const HomePage = () => {
  const [shows, getShows] = useState([])
  const getDataFromApi = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=0bc0728f34b625ce3a0ce16d93e6973e&language=en-US&page=1'
    )
    console.log(resp)
    getShows(resp.data.results)
  }
  useEffect(() => {
    getDataFromApi()
  }, [])
  return (
    <>
      {/* <Router> */}
      <h1>TOP RATED TELEVISION</h1>
      <ul>
        {/* <ul>does map need to be in an ul ? */}
        {shows.map(Show => {
          return (
            <Shows
              key={Show.id}
              img={Show.poster_path}
              name={Show.name}
              overview={Show.overview}
            />
          )
        })}
      </ul>
    </>
  )
}
// {
//   /* <Switch>
//           <Route exact path="/" component={HomePage}></Route>
//           <Route exact path="/ShowPage" component={ShowPage}></Route>
//           <Route path="*" component={NotFound}></Route>
//         </Switch>
//       </Router> */
// }

export default HomePage
