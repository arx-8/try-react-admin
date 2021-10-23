import {
  Edit,
  EditProps,
  InjectedFieldProps,
  ReferenceInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  Toolbar,
  ToolbarProps,
} from "react-admin"
import { DeleteButtonWithConfirm } from "src/components/organisms/DeleteButtonWithConfirm"

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
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextField source="id_big" />
      <TextField source="id" />

      <ReferenceInput reference="users" source="userId">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput
        InputProps={{
          readOnly: true,
        }}
        disabled
        multiline
        source="body"
      />
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

const confirmWithAnswer = (message: string, correctAnswer: string): boolean => {
  return window.prompt(message) === correctAnswer
}

const CustomToolbar = (props: ToolbarProps): JSX.Element => {
  console.log(props)

  return (
    <Toolbar {...props}>
      <SaveButton
        disabled={props.invalid}
        handleSubmitWithRedirect={() => {
          if (
            confirmWithAnswer(
              "入力値によっては即時に公開されます。保存しますか？ (よい場合は save と入力してください)",
              "save"
            )
          ) {
            return props.handleSubmitWithRedirect?.()
          }
          return undefined
        }}
      />
      {/* <DeleteWithConfirmButton /> */}
      {/* <DeleteButton /> */}
      <DeleteButtonWithConfirm
        confirm={() =>
          confirmWithAnswer(
            "本当に削除しますか？ (よい場合は delete と入力してください)",
            "delete"
          )
        }
      />
    </Toolbar>
  )
}
