/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import jsonServerProvider from "ra-data-json-server"
import { Admin, EditGuesser, Resource } from "react-admin"
import { PostList } from "src/components/organisms/PostList"
import { UserList } from "src/components/organisms/UserList"

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com")

const IndexPage = (): JSX.Element => (
  <Admin dataProvider={dataProvider}>
    <Resource list={UserList} name="users" />
    <Resource edit={EditGuesser} list={PostList} name="posts" />
  </Admin>
)

export default IndexPage
