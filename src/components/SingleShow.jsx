import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SingleShow = props => {
  const [shows, getShows] = useState([])
  const getDataFromApi = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=0bc0728f34b625ce3a0ce16d93e6973e&language=en-US&page=1'
    )
    console.log(resp)
    getShows(resp.data.results)
  }
  return (
    <>
      <div>
        <section>
          <li>{props.key}</li>
          <li>{props.name}</li>
          <li>
            <img
              src={
                'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + props.img
              }
            />
          </li>
          <li>{props.overview}</li>
        </section>
      </div>
    </>
  )
}

export default SingleShow
