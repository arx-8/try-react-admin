import {
  Datagrid,
  EditButton,
  List,
  ListProps,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin"

type Props = ListProps

export const PostList = (props: Props): JSX.Element => (
  <List {...props} filters={postFilters}>
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

const postFilters = [
  <TextInput alwaysOn key="1" label="Search" source="q" />,
  <ReferenceInput
    allowEmpty
    key="2"
    label="User"
    reference="users"
    source="userId"
  >
    <SelectInput optionText="name" />
  </ReferenceInput>,
]
