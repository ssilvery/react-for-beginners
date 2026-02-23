import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const {id} = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`)).json();
    console.log(json);
    setMovie(json);
    setLoading(false);
  };
useEffect(() => {
  getMovie();
}, []);
  return (
    <>
      {loading ? (<h1>Loading...</h1>) :
        <>
          <h1>Detail</h1>
          <p>{movie.title}</p>
          
        </>
      }
    </>
  )
}

export default Detail;