import type { PayloadAction } from "@reduxjs/toolkit"
import type { Person } from "./persion.definitions"
import { createAppSlice } from "../../app/createAppSlice"


export type PersonsArrayState = Person[]

export const initialState: PersonsArrayState = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "John Smith",
  },
  {
    id: 4,
    name: "Jane Smith",
  }
]

export const personsArraySlice = createAppSlice({
  name: "personsArray",
  initialState,
  reducers: create => ({
    addPerson: create.reducer((state, action: PayloadAction<Person>) => {
      state.push(action.payload)
    }),
    removePerson: create.reducer((state, action: PayloadAction<number>) => {
      return state.filter(person => person.id !== action.payload)
    }),
    updatePerson: create.reducer((state, action: PayloadAction<Person>) => {
      const personIndex = state.findIndex(person => person.id === action.payload.id)
      if (personIndex === -1) return;
      state[personIndex] = action.payload
    }),
  }),
  selectors: {
    getEvenPersons: state => state.filter(person => person.id % 2 === 0),
    getOddPersons: state => state.filter(person => person.id % 2 !== 0),
  }
})

export const { addPerson, removePerson, updatePerson } = personsArraySlice.actions
export const { getEvenPersons, getOddPersons } = personsArraySlice.selectors
