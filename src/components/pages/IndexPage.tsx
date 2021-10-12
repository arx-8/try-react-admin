/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import PostIcon from "@material-ui/icons/Book"
import UserIcon from "@material-ui/icons/Group"
import { Admin, EditGuesser, Resource } from "react-admin"
import { safetyDataProvider } from "src/components/helpers/createSafetyDataProvider"
import { PostCreate } from "src/components/organisms/PostCreate"
import { PostEdit } from "src/components/organisms/PostEdit"
import { PostList } from "src/components/organisms/PostList"
import { UserCreate } from "src/components/organisms/UserCreate"
import { UserList } from "src/components/organisms/UserList"

const IndexPage = (): JSX.Element => (
  <Admin dataProvider={safetyDataProvider}>
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
