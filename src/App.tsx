import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import { getEvenPersons, getOddPersons, updatePerson } from "./features/persons/personsArraySlice"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { Persons } from "./features/persons/Persons"
import { useMemo, useState } from "react"
import {
  updatePersonNormalized,
  getPersonsNormalized,
} from "./features/persons/personsNormalizedSlice"

const evenPersonId = [2, 4];

const App = () => {
  const dispatch = useAppDispatch()

  const oddPersons = useAppSelector(getOddPersons)
  const evenPerson = useAppSelector(getEvenPersons)
  const [nameForUpdate, setNameForUpdate] = useState("")

  const oddPersonsNormalized = useAppSelector((state) => {
    return getPersonsNormalized(state, 'odd');
  })
  const evenPersonNormalized = useAppSelector((state) => {
    return getPersonsNormalized(state, 'even');
  })

  return (
    <div className="App">
      <input type="text" value={nameForUpdate} onChange={e => setNameForUpdate(e.target.value)} />
      <button onClick={() => {
        dispatch(updatePerson({...oddPersons[0], name: nameForUpdate}))
        dispatch(updatePersonNormalized({...oddPersons[0], name: nameForUpdate}))
      }}>Update first person</button>
      <button onClick={() => {
        dispatch(updatePerson({...evenPerson[evenPerson.length - 1], name: nameForUpdate}))
        dispatch(updatePersonNormalized({...evenPerson[evenPerson.length - 1], name: nameForUpdate}))
      }}>Update last person</button>
      <Persons label="Odd Persons" persons={oddPersons} />
      <Persons label="Even Persons" persons={evenPerson} />
      <Persons label="Odd Persons normalized" persons={oddPersonsNormalized} />
      <Persons label="Even Persons normalized" persons={evenPersonNormalized} shouldShowLog={true} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Quotes />
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://react-redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://reselect.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reselect
          </a>
        </span>
      </header>
    </div>
  )
}

export default App
