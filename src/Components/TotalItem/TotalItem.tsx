import './TotalItem.css'

//Import Imagenes

import addImg from '../../assets/svg/plus.svg'
import substractImg from '../../assets/svg/minus.svg'
import deleteImg from '../../assets/svg/trash.svg'
import { MenuItemConsumption } from '../../Types/MenuTypes'

interface TotalItemProps {
    itemName: string,
    itemPrice: number,
    itemCuantity: number,
    handleAddOrder: (newOrder: MenuItemConsumption) => void,
    handleSubstractOrder: (itemName: string) => void,
    handleDeleteOrder: (itemName: string) => void
}

export const TotalItem = ({ itemName, itemPrice, itemCuantity, handleAddOrder, handleSubstractOrder, handleDeleteOrder }: TotalItemProps) => {

    if (itemCuantity === 1) {
        return <>
            <hr className='TotalItemDivider' />
            <div className='TotalItemContainer'>
                <div className='TotalItemText'>
                    <p className='itemName'>Item Name: {itemName} - Unit price: ${itemPrice}</p>
                    <p className='itemPrice'>Cantidad: {itemCuantity} - Total Price: ${itemCuantity * itemPrice}</p>
                </div>

                <div className='TotalItemButtonContainer'>

                    <button id='subtractButton' className='TotalItemButtonCuantity1' onClick={() => { handleSubstractOrder(itemName) }}>
                        <img src={substractImg} alt="" />
                    </button>

                    <button id='addButton' className='TotalItemButtonNormal' onClick={() => { handleAddOrder({ name: itemName, price: itemPrice, cuantity: itemCuantity }) }}>
                        <img src={addImg} alt="" />
                    </button>

                    <button id='deleteButton' className='TotalItemButtonNormal' onClick={() => { handleDeleteOrder(itemName) }}>
                        <img src={deleteImg} alt="" />
                    </button>
                </div>
            </div>
        </>
    }

    return <>
        <hr className='TotalItemDivider' />
        <div className='TotalItemContainer'>
            <div className='TotalItemText'>
                <p className='itemName'>Item Name: {itemName} - Unit price: ${itemPrice}</p>
                <p className='itemPrice'>Cantidad: {itemCuantity} - Total Price: ${itemCuantity * itemPrice}</p>
            </div>

            <div className='TotalItemButtonContainer'>

                <button id='subtractButton' className='TotalItemButtonNormal' onClick={() => { handleSubstractOrder(itemName) }}>
                    <img src={substractImg} alt="" />
                </button>

                <button id='addButton' className='TotalItemButtonNormal' onClick={() => { handleAddOrder({ name: itemName, price: itemPrice, cuantity: itemCuantity }) }}>
                    <img src={addImg} alt="" />
                </button>
                
                <button id='deleteButton' className='TotalItemButtonNormal' onClick={() => { handleDeleteOrder(itemName) }}>
                    <img src={deleteImg} alt="" />
                </button>
            </div>
        </div>
    </>
}