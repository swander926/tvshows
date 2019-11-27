import React, { useState, useEffect } from 'react'
import axios from 'axios'

// //is this API call to get a single ID, and then pass into this component?
// const SingleShow = props => {
//   // we are looking for an ID so set this to string type in useState, not array
//   const [singleShowId, setSingleShowId] = useState('')

//   const getDataFromApi = async () => {
//     const resp = await axios.get(
//       'https://api.themoviedb.org/3/tv/top_rated?api_key=0bc0728f34b625ce3a0ce16d93e6973e&language=en-US&page=1'
//     )
//     console.log(resp)
//     setSingleShowId(resp.data.results.id)
//   }

//   const getCastId = async () => {
//     const resp = await axios.get(
//       'https://api.themoviedb.org/3/tv/${showID}/credits?api_key=0bc0728f34b625ce3a0ce16d93e6973e&language=en-US'
//     )
//   }
//   useEffect(() => {
//     getDataFromApi()
//     getCastId()
//   }, [])

//   return (
//     <>
//       <div>
//         <section>
//           <li>{resp.cast.name}</li>
//           <li>{resp.cast.name}</li>
//           <li>
//             <img
//               src={
//                 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + props.img
//               }
//             />
//           </li>
//           <li>{props.overview}</li>
//         </section>
//       </div>
//     </>
//   )
// }

return (
  <>
    <h1>IS THERE ANYBODY OUT THERE</h1>
  </>
)

export default SingleShow
