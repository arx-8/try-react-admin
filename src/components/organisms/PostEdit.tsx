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
  <Edit
    {...props}
    title={<PostTitle />}
    transform={(v) => {
      console.log(v)
      return v
    }}
  >
    <SimpleForm>
      <TextInput
        InputProps={{
          readOnly: true,
        }}
        source="id_big"
        value="The big"
      />

      <ReferenceInput reference="users" source="userId">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput
        InputProps={{
          readOnly: true,
        }}
        disabled
        source="title"
      />
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
