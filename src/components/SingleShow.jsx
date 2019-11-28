import React, { useState, useEffect } from 'react'
import axios from 'axios'
// //is this API call to get a single ID, and then pass into this component?
const SingleShow = props => {
  useEffect(() => {
    const getDataFromApi = async () => {
      const resp = await axios.get(
        'https://api.themoviedb.org/3/tv/${props.showId}?api_key=0bc0728f34b625ce3a0ce16d93e6973e&language=en-US&page=1'
      ) 
      console.log(resp)
    }
    const getCastId = async () => {
      const resp = await axios.get(
        'https://api.themoviedb.org/3/tv/${props.showId}/credits?api_key=0bc0728f34b625ce3a0ce16d93e6973e&language=en-US'
      )
    }
    getDataFromApi()
    getCastId()
  }, [])
  return (
    <>
      <h1>IS THERE ANYBODY OUT THERE: {props.showId}</h1>
    </>
  )
}
export default SingleShow

export default SingleShow
