/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import PostIcon from "@material-ui/icons/Book"
import UserIcon from "@material-ui/icons/Group"
import jsonServerProvider from "ra-data-json-server"
import { Admin, EditGuesser, fetchUtils, Resource } from "react-admin"
import { PostCreate } from "src/components/organisms/PostCreate"
import { PostEdit } from "src/components/organisms/PostEdit"
import { PostList } from "src/components/organisms/PostList"
import { UserCreate } from "src/components/organisms/UserCreate"
import { UserList } from "src/components/organisms/UserList"

const httpClient: typeof fetchUtils.fetchJson = (url, options = {}) => {
  options.headers = new Headers({ Accept: "application/json" })
  // add your own headers here
  options.user = {
    authenticated: true,
    token: "SRTRDFVESGNJYTUKTYTHRG",
  }
  return fetchUtils.fetchJson(url, options)
}
const dataProvider = jsonServerProvider(
  // "http://jsonplaceholder.typicode.com",
  "http://localhost:9999",
  httpClient
)

const IndexPage = (): JSX.Element => (
  <Admin dataProvider={dataProvider}>
    <Resource
      create={UserCreate}
      edit={EditGuesser}
      icon={UserIcon}
      list={UserList}
      name="users"
    />
    <Resource
      create={PostCreate}
      edit={PostEdit}
      icon={PostIcon}
      list={PostList}
      name="posts"
    />
  </Admin>
)

export default IndexPage
