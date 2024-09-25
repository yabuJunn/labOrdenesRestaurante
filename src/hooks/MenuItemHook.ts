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

    const handleSubstractOrder = (itemName: string) => {
        console.log(itemName)

        setOrder((prevOrder) => {
            const found = prevOrder.find(o => o.name === itemName)

            if (found) {
                if (found.cuantity > 1) {
                    const index = prevOrder.indexOf(found)
                    const newArray = [...prevOrder]
                    newArray[index].cuantity -= 1
                    return [...newArray]
                }
            }

            //Siempre tiene que retornar algo, algo que cumpla los tipos del estado

            return prevOrder
        })

    }

    const handleDeleteOrder = (itemName: string) => {
        setOrder((prevOrder) => {
            const found = prevOrder.find(o => o.name === itemName)

            if (found) {
                return prevOrder.filter(o => o.name !== itemName);
            }

            return prevOrder
        })
    }

    return {
        order,
        handleAddOrder,
        handleSubstractOrder,
        handleDeleteOrder
    }
}