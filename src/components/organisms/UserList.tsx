import { Datagrid, EmailField, List, ListProps, TextField } from "react-admin"
import { MyUrlField } from "src/components/atoms/MyUrlField"

type Props = ListProps

export const UserList = (props: Props): JSX.Element => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
)
