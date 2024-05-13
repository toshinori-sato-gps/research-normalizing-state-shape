import type { Person as PersonType } from "./persion.definitions"
import { Person } from "./Person"

type Props = {
  label: string;
  persons: PersonType[];
}

export const Persons = ({label, persons }: Props) => {
  return (
    <div>
      <h2>{label}</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  )
}