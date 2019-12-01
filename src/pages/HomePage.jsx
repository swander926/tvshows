import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Shows from '../components/Shows'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [random, getRandom] = useState() //hook using state
  const [shows, getShows] = useState([]) //hook using state
  const featuredTvShow = shows[random]
  const getDataFromApi = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=0bc0728f34b625ce3a0ce16d93e6973e&language=en-US&page=1'
    )
    const response = resp.data.results
    const random = [Math.floor(Math.random() * response.length)]
    getShows(resp.data.results)
    getRandom(random)
  }
  useEffect(() => {
    getDataFromApi()
  }, [])

  shows.splice(random, 1)
  return (
    <>
      <h1>TOP RATED TELEVISION</h1>
      <ul className="featured">
        <section className="featuredSection">
          {featuredTvShow && (
            <li className="featuredTvShow" key={featuredTvShow.id}>
              <Link
                to={`/${featuredTvShow.id}`}
                style={{ textDecoration: 'none' }}
              >
                <p className="featuredTvShowText">{featuredTvShow.name}</p>
              </Link>
              <Link to={`/${featuredTvShow.id}`}>
                <img
                  className="featuredImage"
                  alt=""
                  src={
                    'https://image.tmdb.org/t/p/w185_and_h278_bestv2' +
                    featuredTvShow.poster_path
                  }
                />
              </Link>
              <p className="featuredRating">
                Rating: {featuredTvShow.vote_average}
              </p>
            </li>
          )}
        </section>
      </ul>

      {/* <ul>does map need to be in an ul ? */}
      <ul>
        {shows.map((Show, index) => {
          return (
            /*how is i not equal to random */
            <Shows
              id={Show.id}
              key={Show.id}
              img={Show.poster_path}
              name={Show.name}
              overview={Show.overview}
              // random={random.id}
            />
          )
        })}
      </ul>
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
