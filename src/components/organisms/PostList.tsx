import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin"

type Props = ListProps

export const PostList = (props: Props): JSX.Element => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField label="L1" reference="users" source="userId">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField label="L2" reference="users" source="userId">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
)
