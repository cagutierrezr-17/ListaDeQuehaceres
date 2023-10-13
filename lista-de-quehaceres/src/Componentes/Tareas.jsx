import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { BsFillCheckCircleFill } from "react-icons/bs";
import './Quehaceres.css'

function Tareas({ tareas, setTareas }) {

  const borrarItem = (indice) => {

    const listaTemp = tareas.filter((item, i) => i !== indice);
    setTareas(listaTemp);
  }

  const modificarTarea = (indice) => {
    let temporalTarea = [...tareas];
    temporalTarea[indice].completada = true;
    setTareas(temporalTarea);
  }

  return (
    <div>
      <ul>
        {tareas.map((tarea, indice) => (
          <li key={indice} className='tareas'>
            <p className={tarea.completada ? 'completada' : ''}>{tarea.task}</p>
            <div className='icons-conten'>
              < TiDeleteOutline
                className='icons'
                onClick={() => { borrarItem(indice) }} />
              < BsFillCheckCircleFill
                className='icons1'
                onClick={() => { modificarTarea(indice) }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tareas