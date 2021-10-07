import { css, Global } from "@emotion/react"
import "normalize.css"
import { Fragment, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const GlobalStyles = ({ children }: Props): JSX.Element => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      {children}
    </Fragment>
  )
}

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`
