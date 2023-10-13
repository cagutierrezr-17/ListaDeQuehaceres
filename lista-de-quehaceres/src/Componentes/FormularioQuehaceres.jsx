import { useState } from 'react'
import './Quehaceres.css'
import Tareas from './Tareas';

function FormularioQuehaceres() {
  const [input, setInput] = useState('');
  const [tareas, setTareas] = useState([]);

  const ingresarTarea = (e) => {
    e.preventDefault();

    if (input.trim() !== '') {
      const tempTarea = [...tareas];
      tempTarea.push({
        task: input,
        completada: false,
      });
      setTareas(tempTarea);
      setInput('');
    }
  }

  return (
    <div>
      <form className='formulario' onSubmit={ingresarTarea}>
        <input type="text"
          placeholder='Agregar a la lista'
          name='entrada'
          className='input-form'
          value={input}
          onChange={(e) => { setInput(e.target.value) }} />
        <button
          type="submit"
          className='boton-lista'
          onClick={ingresarTarea}> Agregar </button>
      </form>
      <Tareas tareas={tareas} setTareas={setTareas} />
    </div>
  )
}

export default FormularioQuehaceres