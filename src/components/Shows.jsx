import React from 'react'
import { Link } from 'react-router-dom'

const Shows = props => {
  // const filePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'
  return (
    <>
      <div className="tvContainer">
        <div className="tvBackground">
          <section className="tvSection">
            <ul className="tvList">
              <li>{props.key}</li>
              {/* what is props.key */}
              <li>
                <Link to={`/${props.id}`}>
                  <img
                    src={
                      'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' +
                      props.img
                    }
                    height="400px"
                    width="300px"
                    alt="TV Poster Image"
                  />
                </Link>
              </li>
            </ul>
            <Link to={`/${props.id}`}>
              <h2>{props.name}</h2>
            </Link>
            <p className="paraGraph">{props.overview}</p>
            <br></br>
            <br></br>
          </section>
          <hr className="breakline" width="700px"></hr>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  )
}
export default Shows
