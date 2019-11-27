import React from 'react'

const Shows = props => {
  // const filePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'

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

export default Shows
