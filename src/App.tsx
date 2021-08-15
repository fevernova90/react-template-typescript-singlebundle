import "./styles.css"
import IMAGE from "./react.png"
import LOGO from "./react.svg"

export const App = () => {
  return (
    <>
      <h1>React Typescript Webpack Starter Template</h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="React Logo" width="300" />
    </>
  )
}
