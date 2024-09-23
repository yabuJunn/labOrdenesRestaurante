import { MouseEventHandler } from 'react'
import { MenuItemConsumption } from '../../Types/MenuTypes'
import './MenuItem.css'

interface MenuItemProps {
    itemName: string,
    itemPrice: string,
    AddItem: (newOrder: MenuItemConsumption) => void
}

export const MenuItem = ({ itemName, itemPrice, AddItem }: MenuItemProps) => {

    const handleOnClick: MouseEventHandler<HTMLDivElement> | undefined = () => {
        AddItem({
            name: itemName,
            cuantity: 1,
            price: parseInt(itemPrice)
        })
    }

    return <>
        <div className="MenuItemContainer" onClick={handleOnClick}>
            <p>{itemName}</p>
            <p>${itemPrice}</p>
        </div>
    </>
}