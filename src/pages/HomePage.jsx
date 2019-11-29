import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
      <h1>Top Rated Television</h1>
      <br></br>

      <div className="homepageContainer">
        {/* <ul>does map need to be in an ul ? */}
        <ul>
          {shows.map(Show => {
            return (
              <>
                <Shows
                  id={Show.id}
                  key={Show.id}
                  img={Show.poster_path}
                  name={Show.name}
                  overview={Show.overview}
                />
                {/*  */}
              </>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default HomePage
{
  /* <p className="topParagraph">
                  Here is a list of the top 20 rated TV series by The Movie
                  Database, based on the highest vote average. Hope you enjoy!
                </p> */
}
// how to place this inside dark green only 1 time
