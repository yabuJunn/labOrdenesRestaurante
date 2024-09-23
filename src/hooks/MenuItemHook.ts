import { useState } from "react"
import { MenuConsumption, MenuItemConsumption } from "../Types/MenuTypes"

export const useOrder = () => {
    const [order, setOrder] = useState<MenuConsumption>([])

    const handleAddOrder = (newOrder: MenuItemConsumption) => {
        setOrder((prevOrder) => {
            const found = prevOrder.find(o => o.name === newOrder.name)

            if (!found) {
                return [...prevOrder, newOrder]
            } else {
                const index = prevOrder.indexOf(found)
                const newArray = [...prevOrder]
                newArray[index].cuantity += 1
                return [...newArray]
            }
        })
    }

    return {
        order,
        handleAddOrder
    }
}