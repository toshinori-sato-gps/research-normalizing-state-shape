import type { Person as PersonType } from "./persion.definitions"

type Props = {
  person: PersonType;
}

export const Person = ({ person }: Props) => {
  return (
    <div>
      <h3>No.{person.id} {person.name}</h3>
    </div>
  )
}
