import {
  Edit,
  EditProps,
  InjectedFieldProps,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin"

type Props = EditProps

export const PostEdit = (props: Props): JSX.Element => (
  <Edit {...props} title={<PostTitle />}>
    <SimpleForm>
      <ReferenceInput reference="users" source="userId">
        <SelectInput optionText="name" />
      </ReferenceInput>
      {/* <TextInput disabled source="id" /> */}
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
)

type Post = {
  id: string
  title: string
}

const PostTitle = ({ record }: InjectedFieldProps<Post>): JSX.Element => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>
}
