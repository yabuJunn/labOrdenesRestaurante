import './App.css'

//Components
import { Title } from './Components/Title/Title'
import { Menu } from './Components/Menu/Menu'

function App() {

  return (
    <>
      <Title></Title>

      <div id='menuAndResultContainer'>
        <Menu></Menu>
      </div>
    </>
  )
}

export default App
