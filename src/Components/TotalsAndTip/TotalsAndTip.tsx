import './TotalsAndTip.css'

// interface TotalsAndTipProps {

// }

export const TotalsAndTip = () => {
    const subtotal = ""
    const tipTotal = ""
    const total = ""

    return <>
        <div id="TotalsAndTipContainer">
            <h3>Totals and Tip</h3>
            <p>Subtotal payable: {subtotal}</p>
            <p>Tip:  {tipTotal}</p>
            <p>Total: {total}</p>
        </div>
    </>
}