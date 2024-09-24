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
}

export const TotalItem = ({ itemName, itemPrice, itemCuantity, handleAddOrder }: TotalItemProps) => {


    return <>
        <div className='TotalItemContainer'>
            <div className='TotalItemText'>
                <p className='itemName'>{itemName} - ${itemPrice}</p>
                <p className='itemPrice'>Cantidad: {itemCuantity} - ${itemCuantity * itemPrice}</p>
            </div>

            <div className='TotalItemButtonContainer'>
                <button id='addButton' className='TotalItemButton' onClick={() => { handleAddOrder({ name: itemName, price: itemPrice, cuantity: itemCuantity }) }}>
                    <img src={addImg} alt="" />
                </button>
                <button id='subtractButton' className='TotalItemButton'>
                    <img src={substractImg} alt="" />
                </button>
                <button id='deleteButton' className='TotalItemButton'>
                    <img src={deleteImg} alt="" />
                </button>
            </div>
        </div>
    </>
}