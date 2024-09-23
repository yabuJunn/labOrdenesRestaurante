import { useTotalsAndTip } from '../../hooks/TotalsAndTipHook'
import { MenuConsumption } from '../../Types/MenuTypes'
import './TotalsAndTip.css'

interface TotalsAndTipProps {
    orderArray: MenuConsumption,
    tipValue: number
}

export const TotalsAndTip = ({ orderArray, tipValue }: TotalsAndTipProps) => {

    const { handleShowResult } = useTotalsAndTip(orderArray, tipValue)

    const { subtotal, tip, total } = handleShowResult()

    return <>
        <div id="TotalsAndTipContainer">
            <h3>Totals and Tip</h3>
            <p>Subtotal payable: ${subtotal}</p>
            <p>Tip:  ${tip}</p>
            <p>Total: ${total}</p>
        </div>
    </>
}