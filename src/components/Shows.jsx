import React from 'react'
import { Link } from 'react-router-dom'
const Shows = props => {
  // const filePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'
  if (props.id == props.random) {
    return (
      <div className="randomTvContainer">
        <section className="tvSection">
          <Link to={`/${props.id}`}>
            <h2>{props.name}</h2>
          </Link>
          <ul className="tvList">
            <li>{props.key}</li>
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
            <li>{props.overview}</li>
          </ul>
        </section>
      </div>
    )
  } else {
    return (
      <>
        <div className="tvContainer">
          <section className="tvSection">
            <Link to={`/${props.id}`}>
              <h2>{props.name}</h2>
            </Link>
            <ul className="tvList">
              <li>{props.key}</li>
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
              <li>{props.overview}</li>
            </ul>
          </section>
        </div>
      </>
    )
  }
}

export default Shows
