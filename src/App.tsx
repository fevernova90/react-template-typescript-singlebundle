import './styles.css'
import IMAGE from './react.png'
import LOGO from './react.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  const name = 'muhaimin'
  return (
    <>
      <h1>
        React Typescript Webpack Starter Template - {process.env.NODE_ENV} -
        {process.env.name} - {name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="React Logo" width="300" />
      <ClickCounter />
    </>
  )
}
