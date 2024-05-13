import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit"
import { createEntityAdapter } from "@reduxjs/toolkit"
import type { Person } from "./persion.definitions"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppState } from "../../app/store"

export type PersonsNormalizedState = Record<string, Record<Person['id'], Person>>;
export const initialState: PersonsNormalizedState = {
  odd: {
    1: {
      id: 1,
      name: "John Doe",
    },
    3: {
      id: 3,
      name: "John Smith",
    },
  },
  even: {
    2: {
      id: 2,
      name: "Jane Doe",
    },
    4: {
      id: 4,
      name: "Jane Smith",
    }
  },
};

export const personsNormalizedSlice = createAppSlice({
  name: "personsNormalized",
  initialState,
  reducers: create => ({
    addPersonNormalized: create.reducer((state, action: PayloadAction<Person>) => {
      const rootId = action.payload.id % 2 === 0 ? 'even' : 'odd';
      state[rootId][action.payload.id] = action.payload;
    }),
    removePersonNormalized: create.reducer((state, action: PayloadAction<number>) => {
      const rootId = action.payload.id % 2 === 0 ? 'even' : 'odd';
      delete state[rootId][action.payload];
    }),
    updatePersonNormalized: create.reducer((state, action: PayloadAction<Person>) => {
      const rootId = action.payload.id % 2 === 0 ? 'even' : 'odd';
      state[rootId][action.payload.id] = action.payload;
    }),
  }),
  selectors: {
    getPersonsNormalizedId: (state, oddOrEven: string) => {
      return state[oddOrEven];
    },
  }
})

export const { addPersonNormalized, removePersonNormalized, updatePersonNormalized } = personsNormalizedSlice.actions
export const { getPersonsNormalizedId } = personsNormalizedSlice.selectors
export const getPersonsNormalized = createSelector(
  [getPersonsNormalizedId],
  (persons) => Object.values(persons)
)
