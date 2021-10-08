import { UrlFieldProps } from "react-admin"

type Props = UrlFieldProps

export const MyUrlField = ({ record, source }: Props): JSX.Element | null => {
  if (record == null || source == null) {
    return null
  }
  return <a href={`https://${record[source]}`}>{record[source]}</a>
}
