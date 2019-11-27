import React from 'react'
import SingleShow from '../components/SingleShow'

const ShowPage = props => {
  return <SingleShow showId={props.match.params.id} />
}

export default ShowPage
