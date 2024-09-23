import { MenuConsumption } from '../../Types/MenuTypes'
import { TotalItem } from '../TotalItem/TotalItem'
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
        console.log(orderArray)

        return <>
            <div id="TotalContainer">
                <h2>Consumption Summary</h2>
                <p>Order is something</p>

                <div id='TotalItemsContainer'>
                    {orderArray.map((MenuOrder) => {
                        return <TotalItem itemName={MenuOrder.name} itemPrice={MenuOrder.price} itemCuantity={MenuOrder.cuantity} key={MenuOrder.name}></TotalItem>
                    })}
                </div>
            </div>
        </>
    }
}