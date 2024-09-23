import { MouseEventHandler } from "react"
import { MenuItemConsumption } from "../Types/MenuTypes"

interface useMenuItemProps {
    itemName: string,
    itemPrice: number,
    AddItem: (newOrder: MenuItemConsumption) => void
}

export const useMenuItem = ({ itemName, itemPrice, AddItem }: useMenuItemProps) => {
    const handleOnClick: MouseEventHandler<HTMLDivElement> = () => {
        AddItem({
            name: itemName,
            cuantity: 1,
            price: itemPrice
        })
    }

    return {
        handleOnClick
    }
}