import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ShowPage from './ShowPage'
import NotFound from './NotFound'
import axios from 'axios'
import Shows from '../components/Shows'

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
      <h1> PLEASE HELP</h1>
      <h2> is there anybody</h2>
      <ul>
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

export default HomePage
