import { MenuConsumption } from '../../Types/MenuTypes'
import './Total.css'

interface TotalProps {
    orderArray: MenuConsumption
}

export const Total = ({ orderArray }: TotalProps) => {
    if (orderArray.length === 0) {
        return <>
            <div id="TotalContainer">
                <h2>Consumption Summary</h2>
                <p>Order is empty</p>
            </div>
        </>
    } else {
        return <>
            <div id="TotalContainer">
                <h2>Consumption Summary</h2>
                <p>Order is something</p>
            </div>
        </>
    }
}