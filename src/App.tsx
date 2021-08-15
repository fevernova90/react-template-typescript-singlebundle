import './styles.css'
import IMAGE from './react.png'
import LOGO from './react.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>Welcome to {process.env.APPNAME}</h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="React Logo" width="300" />
      <ClickCounter />
    </>
  )
}
