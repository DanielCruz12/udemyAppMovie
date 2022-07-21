import React, { useState } from "react";
import { saveAtLocalStorage } from "../helpers";

const Add = () => {
  const [movieState, setMovie] = useState({
    id: 0,
    title: "",
    description: "",
  });

  const { title, description } = movieState;

  const getDataForm = (e) => {
    e.preventDefault();

    /* get data from form tag */
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    /* make an object */
    let movie = {
      id: new Date().getTime(),
      title,
      description,
    };
    setMovie(movie);

    saveAtLocalStorage("movies", movie);
  };


  const titleComponent = "añadir titulo";
  
  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>

      {(title &&
        description) &&
        alert("la pelicula " + title + " fue añadida correctamente.")}
      <form onSubmit={getDataForm}>
        <input type="text" id="title" name="title" placeholder="Titulo" />
        <textarea id="description" name="description" placeholder="Descripción"></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>

  );
};

export default Add;
