import './Menu.css'

import { MenuItem } from '../MenuItem/MenuItem'

export const Menu = () => {
    return <>
        <div id="MenuContainer">
            <h2>Menu Options</h2>
            <div id='MenuItemsContainer'>
                <MenuItem itemName={'Prueba'} itemPrice={'30'}></MenuItem>
            </div>
        </div>
    </>
}