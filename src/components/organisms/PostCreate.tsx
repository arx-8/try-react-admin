import {
  Create,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin"

type Props = CreateProps

export const PostCreate = (props: Props): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput reference="users" source="userId">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
      <NumberInput max={10} source="age" />
    </SimpleForm>
  </Create>
)
