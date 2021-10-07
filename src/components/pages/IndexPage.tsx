/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import logo from "src/assets/logo.svg"
import "./IndexPage.css"

function IndexPage(): JSX.Element {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default IndexPage
