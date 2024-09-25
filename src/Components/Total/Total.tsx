import { MenuConsumption, MenuItemConsumption } from '../../Types/MenuTypes'

import './Total.css'

//Import Components

import { Tip } from '../Tip/Tip'
import { TotalItem } from '../TotalItem/TotalItem'
import { TotalsAndTip } from '../TotalsAndTip/TotalsAndTip'

interface TotalProps {
    orderArray: MenuConsumption,
    tipValue: number,
    handleAddOrder: (newOrder: MenuItemConsumption) => void,
    handleOnChangeTipComponent: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubstractOrder: (itemName: string) => void,
    handleDeleteOrder: (itemName: string) => void,
    handleSetOrder: (newOrder: MenuConsumption) => void
}

export const Total = ({ orderArray, tipValue, handleAddOrder, handleOnChangeTipComponent, handleSubstractOrder, handleDeleteOrder, handleSetOrder }: TotalProps) => {
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
                <p>This is your order</p>

                <div id='TotalItemsContainer'>
                    {orderArray.map((MenuOrder) => {
                        return <TotalItem itemName={MenuOrder.name} itemPrice={MenuOrder.price} itemCuantity={MenuOrder.cuantity} key={MenuOrder.name} handleAddOrder={handleAddOrder} handleSubstractOrder={handleSubstractOrder} handleDeleteOrder={handleDeleteOrder}></TotalItem>
                    })}
                </div>

                <Tip handleOnChangeTipComponent={handleOnChangeTipComponent} tipValue={tipValue}></Tip>
                <TotalsAndTip orderArray={orderArray} tipValue={tipValue}></TotalsAndTip>

                <button onClick={() => { handleSetOrder([]) }}>
                    Place order
                </button>
            </div>
        </>
    }
}