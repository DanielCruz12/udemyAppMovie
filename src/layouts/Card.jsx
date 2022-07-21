import React, { useEffect, useState } from "react";

const Card = () => {
  const [listState, setList] = useState([]);

  useEffect(() => {
    console.log('cargado')
    getMovies();
  }, [])

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem('movies'));
    setList(movies);
  }

  return (
    <>
      {listState != null ? listState.map(movie => {
            return (
              <section key={movie.id} className="content" id="content">
                <article className="peli-item">
                  <h3 className="title">{movie.title}</h3>
                  <p className="description">
                    Angry Birds es una pelicula informal de 2009 desarrollado por Rovio
                    Entertainment.
                  </p>
                  <button className="edit">Editar</button>
                  <button className="delete">Borrar</button>
                </article>
              </section>
            );
          })
        : (<h3>No hay pelis</h3>)
      }
    </>
  );
};

export default Card;
