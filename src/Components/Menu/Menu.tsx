import './Menu.css'

import { MenuItem } from '../MenuItem/MenuItem'
import { MenuItemConsumption } from '../../Types/MenuTypes'

interface MenuProps {
    AddItem: (newOrder: MenuItemConsumption) => void
}

export const Menu = ({ AddItem }: MenuProps) => {
    return <>
        <div id="MenuContainer">
            <h2>Menu Options</h2>
            <div id='MenuItemsContainer'>
                <MenuItem itemName={'Prueba'} itemPrice={'30'} AddItem={AddItem}></MenuItem>
            </div>
        </div>
    </>
}