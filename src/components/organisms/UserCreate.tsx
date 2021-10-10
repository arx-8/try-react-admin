import {
  Create,
  CreateProps,
  email,
  maxLength,
  minLength,
  required,
  SimpleForm,
  TextInput,
} from "react-admin"

const validateName = [required(), minLength(2), maxLength(15)]
const validateEmail = [required(), email()]

type Props = CreateProps

export const UserCreate = (props: Props): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={validateName} />
      <TextInput source="username" />
      <TextInput source="email" type="email" validate={validateEmail} />
      <TextInput source="website" type="url" />
    </SimpleForm>
  </Create>
)
