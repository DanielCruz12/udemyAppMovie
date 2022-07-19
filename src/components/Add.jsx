import React from 'react'
import {getDataForm} from '../helpers/index'

const Add = () => {
  const title = "añadir titulo"

  return (
    <div className="add">
          <h3 className="title">{title}</h3>
          <form onSubmit={getDataForm}>
            <input type="text" id="title" placeholder="Titulo"  onChange={(e) => console.log(e.target.value)}/>
            <textarea id="description" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
          </form>
        </div>
  )
}

export default Add;