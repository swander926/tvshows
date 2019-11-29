import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Shows from '../components/Shows'
// import SingleShow from '../components/SingleShow'

const HomePage = () => {
  const [random, getRandom] = useState([])
  const [shows, getShows] = useState([])
  const getDataFromApi = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=0bc0728f34b625ce3a0ce16d93e6973e&language=en-US&page=1'
    )
    const response = resp.data.results
    // console.log(response)
    const random = response[Math.floor(Math.random() * response.length)]
    const index = random.id
    // console.log(random)
    // console.log(index)
    getShows(resp.data.results)
    getRandom(random)
  }
  useEffect(() => {
    getDataFromApi()
  }, [])

  return (
    <>
      <h1>TOP RATED TELEVISION {random.id}</h1>
      {/* <ul>does map need to be in an ul ? */}
      <ul>
        {shows.map(Show => {
          return (
            <Shows
              id={Show.id}
              key={Show.id}
              img={Show.poster_path}
              name={Show.name}
              overview={Show.overview}
              random={random.id}
            />
          )
        })}
      </ul>
    </>
  )
  console.log(random)
}

export default HomePage
{
  /* <p className="topParagraph">
                  Here is a list of the top 20 rated TV series by The Movie
                  Database, based on the highest vote average. Hope you enjoy!
                </p> */
}
// how to place this inside dark green only 1 time
