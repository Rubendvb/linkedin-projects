import { useState } from 'react'
import './App.css'

function App() {
  const [nameClass, setNameClass] = useState('')

  const classes = ['classeA', 'classeB', 'classeC']

  return (
    <div className="col-md-6">
      <div className={nameClass}>
        <blockquote>
          <p className="display-4 mb-0">Viver é nascer a cada instante</p>
        </blockquote>
        <footer className="blockquote-footer">Erich Fromm.</footer>
      </div>

      {classes.map((name, index) => (
        <button
          className="btn btn-outline-primary me-1"
          key={index}
          onClick={() => setNameClass(name)}
        >
          {name}
        </button>
      ))}
    </div>
  )
}

export default App
