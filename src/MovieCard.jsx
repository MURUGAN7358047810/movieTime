import React from 'react'

export const MovieCard = ({movies1}) => {
  return (
    <div className='movie'>
           <div>
              <p>{movies1.Year}</p>
            </div>

              <div>
               <img src={movies1.Poster} alt={movies1.Title} />
              </div>

              <div>
              <span>{movies1.Type}</span>
              <h3>{movies1.Title}</h3>
              </div>
    </div>
  )
}
