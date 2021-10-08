import {
  Datagrid,
  EditButton,
  List,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin"

type Props = ListProps

export const PostList = (props: Props): JSX.Element => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="userId" reference="users" source="userId">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField label="userName" reference="users" source="userId">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
)
