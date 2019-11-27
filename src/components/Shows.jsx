import React from 'react'

const Shows = props => {
  // const filePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'

  return (
    <>
      <div className="tvContainer">
        <section className="tvSection">
          <h2>{props.name}</h2>
          <ul className="tvList">
            <li>{props.key}</li>
            <li>
              <img
                src={
                  'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + props.img
                }
                height="400px"
                width="300px"
                alt="TV Poster Image"
              />
            </li>
            <li>{props.overview}</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Shows
