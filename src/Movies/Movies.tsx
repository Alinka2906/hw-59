import MoviesItem from './MoviesItem';
import {Types} from "../../type";
import React from "react";

interface Props {
  movies: Types[],
}

const Movies: React.FC<Props> = ({movies}) => {
  return (
    <>
      <h4>Users</h4>
  {movies.map((mov) => (
    <MoviesItem name={mov}/>
  ))}
  </>
);
};

export default Movies;