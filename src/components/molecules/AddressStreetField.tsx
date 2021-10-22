import { TextFieldProps } from "react-admin"

type Props = TextFieldProps

export const AddressStreetField = (props: Props): JSX.Element | null => {
  console.log(props)
  const { record, source } = props

  if (record == null || source == null) {
    return null
  }
  return <div>hello</div>
}
