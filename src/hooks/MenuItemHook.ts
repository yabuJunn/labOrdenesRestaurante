import { useState } from "react"
import { MenuConsumption, MenuItemConsumption } from "../Types/MenuTypes"

export const useOrder = () => {
    const [order, setOrder] = useState<MenuConsumption>([])

    const handleAddOrder = (newOrder: MenuItemConsumption) => {
        setOrder((prevOrder) => {
            return [...prevOrder, newOrder]
        })
    }

    return {
        order,
        handleAddOrder
    }
}