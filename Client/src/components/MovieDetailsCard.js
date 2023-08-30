import React from 'react'

export const MovieDetailsCard = ({movie}) => {


  return (
    <div className="card-movies">
      <h3>{movie.name}</h3>
      <p>Rating:{movie.name}</p>
      <p>Released Date:{movie.releasedDate}</p>
    </div>
  );
}
