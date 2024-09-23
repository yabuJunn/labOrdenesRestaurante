import { useState } from "react"
import { MenuConsumption } from "../Types/MenuTypes"

export const useOrder = () => {
    const [order, setOrder] = useState<MenuConsumption>([])

    return order
}