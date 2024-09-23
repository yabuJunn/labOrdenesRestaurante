import './App.css'

//Import hooks

//Components
import { Title } from './Components/Title/Title'
import { Menu } from './Components/Menu/Menu'
import { Total } from './Components/Total/Total'
import { useOrder } from './hooks/MenuItemHook'

function App() {

  const { order, handleAddOrder } = useOrder()

  return <>
    <Title></Title>

    <div id='menuAndResultContainer'>
      <Menu AddItem={handleAddOrder}></Menu>
      <Total orderArray={order}></Total>
    </div>
  </>
}

export default App
