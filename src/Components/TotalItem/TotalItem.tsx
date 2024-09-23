import './TotalItem.css'

interface TotalItemProps {
    itemName: string,
    itemPrice: number,
    itemCuantity: number
}

export const TotalItem = ({ itemName, itemPrice, itemCuantity }: TotalItemProps) => {
    return <>
        <div className='TotalItemContainer'>
            <div className='TotalItemText'>
                <p className='itemName'>{itemName} - {itemPrice}</p>
                <p className='itemPrice'>Cantidad: ${itemCuantity} - ${itemCuantity * itemPrice}</p>
            </div>

            <div className='TotalItemButtonContainer'>
                <button>

                </button>
            </div>
        </div>
    </>
}