import type { Person as PersonType } from "./persion.definitions"
import { Person } from "./Person"
import React from "react"

type Props = {
  label: string;
  persons: PersonType[];
  shouldShowLog?: boolean;
}

export const Persons = React.memo(({label, persons, shouldShowLog }: Props) => {
  if (shouldShowLog) console.log('render', label);
  return (
    <div>
      <h2>{label}</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  )
});