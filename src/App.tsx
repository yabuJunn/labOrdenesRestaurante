import './App.css'

//Import hooks
import { useOrder } from './hooks/MenuItemHook'
import { useTip } from './hooks/TipHook'

//Components
import { Title } from './Components/Title/Title'
import { Menu } from './Components/Menu/Menu'
import { Total } from './Components/Total/Total'

function App() {

  const { order, handleAddOrder } = useOrder()

  const { tip } = useTip()

  console.log("New tipValue: ", tip)

  return <>
    <Title></Title>

    <div id='menuAndResultContainer'>
      <Menu AddItem={handleAddOrder}></Menu>
      <Total orderArray={order} tipValue={tip}></Total>
    </div>
  </>
}

export default App
