import './App.css'

//Import hooks

import { useState } from 'react'

//Components
import { Title } from './Components/Title/Title'
import { Menu } from './Components/Menu/Menu'
import { MenuConsumption } from './Types/MenuTypes'
import { Total } from './Components/Total/Total'

function App() {

  const [order, setOrder] = useState<MenuConsumption>([])

  return <>
    <Title></Title>

    <div id='menuAndResultContainer'>
      <Menu></Menu>
      <Total orderArray={order}></Total>
    </div>
  </>
}

export default App
