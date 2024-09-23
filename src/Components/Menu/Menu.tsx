import './Menu.css'

import { MenuItem } from '../MenuItem/MenuItem'
import { MenuItemConsumption } from '../../Types/MenuTypes'
import { MenuItems } from '../../utils/MenuItems'

interface MenuProps {
    AddItem: (newOrder: MenuItemConsumption) => void
}

export const Menu = ({ AddItem }: MenuProps) => {
    return <>
        <div id="MenuContainer">
            <h2>Menu Options</h2>
            <div id='MenuItemsContainer'>
                {MenuItems.map((item) => {
                    return <MenuItem itemName={item.itemName} itemPrice={item.itemPrice} AddItem={AddItem} key={item.itemName}></MenuItem>
                })}
            </div>
        </div>
    </>
}