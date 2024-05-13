import type { Person as PersonType } from "./persion.definitions"
import { Person } from "./Person"
import React from "react"

type Props = {
  label: string;
  persons: PersonType[];
}

export const Persons = React.memo(({label, persons }: Props) => {
  console.log('render', label);
  return (
    <div>
      <h2>{label}</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  )
});