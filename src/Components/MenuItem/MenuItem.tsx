import './MenuItem.css'

interface MenuItemProps {
    itemName: string,
    itemPrice: string
}

export const MenuItem = ({ itemName, itemPrice
}: MenuItemProps) => {
    return <>
        <div className="MenuItemContainer">
            <p>{itemName}</p>
            <p>${itemPrice}</p>
        </div>
    </>
}