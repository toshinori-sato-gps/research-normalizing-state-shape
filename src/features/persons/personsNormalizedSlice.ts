import type { PayloadAction } from "@reduxjs/toolkit"
import type { Person } from "./persion.definitions"
import { createAppSlice } from "../../app/createAppSlice"


export type PersonsNormalizedState = Record<Person['id'], Person>

export const initialState: PersonsNormalizedState = {
  1: {
    id: 1,
    name: "John Doe",
  },
  2: {
    id: 2,
    name: "Jane Doe",
  },
  3: {
    id: 3,
    name: "John Smith",
  },
  4: {
    id: 4,
    name: "Jane Smith",
  }
};


export const personsNormalizedSlice = createAppSlice({
  name: "personsNormalized",
  initialState,
  reducers: create => ({
    addPersonNormalized: create.reducer((state, action: PayloadAction<Person>) => {
      state[action.payload.id] = action.payload;
    }),
    removePersonNormalized: create.reducer((state, action: PayloadAction<number>) => {
      delete state[action.payload];
      return state;
    }),
    updatePersonNormalized: create.reducer((state, action: PayloadAction<Person>) => {
      state[action.payload.id] = action.payload;
    }),
  }),
  selectors: {
    getEvenPersonsNormalized: state => {
      return Object.values(state).filter(person => person.id % 2 === 0)
    },
    getOddPersonsNormalized: state => {
      return Object.values(state).filter(person => person.id % 2 !== 0)
    },
  }
})

export const { addPersonNormalized, removePersonNormalized, updatePersonNormalized } = personsNormalizedSlice.actions
export const { getEvenPersonsNormalized, getOddPersonsNormalized } = personsNormalizedSlice.selectors
