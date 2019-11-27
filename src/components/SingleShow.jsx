import React, { useState, useEffect } from 'react'
import axios from 'axios'

// //is this API call to get a single ID, and then pass into this component?
const SingleShow = props => {
  const [castInfo, getCastInfo] = useState([])
  const [tvShow, getTvShow] = useState(null)

  useEffect(() => {
    const getDataFromApi = async () => {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/tv/${props.showId}?api_key=0bc0728f34b625ce3a0ce16d93e6973e&language=en-US&page=1`
      )
      getTvShow(resp.data)
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${props.showId}/credits?api_key=0bc0728f34b625ce3a0ce16d93e6973e&language=en-US`
      )
      getCastInfo(response.data.cast)
    }
    getDataFromApi()
  }, [props.showId])

  if (tvShow) {
    return (
      <>
        <h1>{tvShow.original_name}</h1>
        <h1>
          <img src={`https://image.tmdb.org/t/p/w500` + tvShow.poster_path} />
        </h1>
        <ul>
          Casttttttt
          {castInfo.map((castList, index) => {
            return (
              <li id={index}>
                {castList.name + ' '}
                as
                <img
                  src={
                    'https://image.tmdb.org/t/p/w185_and_h278_bestv2' +
                    castList.profile_path
                  }
                />
              </li>
            )
          })}
        </ul>
        {/* how does this map work */}
      </>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default SingleShow
