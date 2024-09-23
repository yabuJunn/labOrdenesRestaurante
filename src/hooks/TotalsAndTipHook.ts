import { MenuConsumption } from "../Types/MenuTypes"

export const useTotalsAndTip = (orderArray: MenuConsumption, tipValue: number) => {

    const handleShowResult = () => {
        let subtotal = 0
        orderArray.forEach((item) => {
            subtotal = subtotal + item.price * item.cuantity
        })
        console.log("subtotal: ", subtotal)

        console.log("Tip value: ", tipValue)
        const tip = subtotal * tipValue
        console.log("tip: ", tip)

        const total = subtotal + tip

        return {
            subtotal,
            tip,
            total
        }
    }

    return {
        handleShowResult
    }
}