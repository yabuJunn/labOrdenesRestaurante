import { MenuItemConsumption } from '../../Types/MenuTypes'
import './MenuItem.css'
import { useMenuItem } from '../../hooks/OrderHook'

interface MenuItemProps {
    itemName: string,
    itemPrice: number,
    AddItem: (newOrder: MenuItemConsumption) => void
}

export const MenuItem = ({ itemName, itemPrice, AddItem }: MenuItemProps) => {

    const { handleOnClick } = useMenuItem({ itemName: itemName, itemPrice: itemPrice, AddItem: AddItem })

    return <>
        <div className="MenuItemContainer" onClick={handleOnClick}>
            <p>{itemName}</p>
            <p>${itemPrice}</p>
        </div>
    </>
}