import {
  ArrayField,
  Datagrid,
  EmailField,
  InjectedFieldProps,
  List,
  ListProps,
  PublicFieldProps,
  Record,
  TextField,
} from "react-admin"
import { MyUrlField } from "src/components/atoms/MyUrlField"

type Props = ListProps

export const UserList = (props: Props): JSX.Element => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />

      <ArrayField source="_favs">
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
        </Datagrid>
      </ArrayField>

      <FavsField fieldKey="id" source="_favs" />

      <TextField source="address.street" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
)

// type CustomAFP = Omit<Required<ArrayFieldProps, "fieldKey">, "children">

type CustomAFP<TRecord extends Record> = {
  fieldKey: string
} & PublicFieldProps &
  InjectedFieldProps<TRecord>

type User = {
  _favs: {
    id: string
    name: string
  }[]
  id: string
}

const FavsField = (props: CustomAFP<User>): JSX.Element | null => {
  const { record } = props

  if (record == null) {
    return null
  }

  return (
    <ul>
      {record._favs.map((x) => (
        <li key={x.id}>
          {x.id}:{x.name}
        </li>
      ))}
    </ul>
  )
}
