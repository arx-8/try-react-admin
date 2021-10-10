/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import PostIcon from "@material-ui/icons/Book"
import UserIcon from "@material-ui/icons/Group"
import createDataProvider from "ra-data-json-server"
import { Admin, EditGuesser, fetchUtils, Resource } from "react-admin"
import { PostCreate } from "src/components/organisms/PostCreate"
import { PostEdit } from "src/components/organisms/PostEdit"
import { PostList } from "src/components/organisms/PostList"
import { UserCreate } from "src/components/organisms/UserCreate"
import { UserList } from "src/components/organisms/UserList"
import { sleep } from "src/utils"

const httpClient: typeof fetchUtils.fetchJson = async (url, options = {}) => {
  options.headers = new Headers({ Accept: "application/json" })
  // MEMO: await 使える
  const token = await sleep(1000).then(() => "SRTRDFVESGNJYTUKTYTHRG")
  options.user = {
    authenticated: true,
    token: token,
  }
  return fetchUtils.fetchJson(url, options)
}
const dataProvider = createDataProvider(
  "http://jsonplaceholder.typicode.com",
  // "http://localhost:9999",
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
