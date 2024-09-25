import './Tip.css'

interface TipPros {
    handleOnChangeTipComponent: (e: React.ChangeEvent<HTMLInputElement>) => void
    tipValue: number
}

export const Tip = ({ handleOnChangeTipComponent, tipValue }: TipPros) => {
    if (tipValue === 0) {
        return <>
            <div id="TipContainer">
                <h3>Tip</h3>
                <p>Select the percentage you want to tip:</p>
                <form id="TipForm">
                    <div className="tipOption">
                        <label htmlFor="tip-0">0%</label>
                        <input type="radio" name="tip" id="tip-0" value={0} checked onChange={handleOnChangeTipComponent} />
                    </div>
                    <div className="tipOption">
                        <label htmlFor="tip-10">10%</label>
                        <input type="radio" name="tip" id="tip-10" value={0.1} onChange={handleOnChangeTipComponent} />
                    </div>
                    <div className="tipOption">
                        <label htmlFor="tip-20">20%</label>
                        <input type="radio" name="tip" id="tip-20" value={0.2} onChange={handleOnChangeTipComponent} />
                    </div>
                    <div className="tipOption">
                        <label htmlFor="tip-50">50%</label>
                        <input type="radio" name="tip" id="tip-50" value={0.5} onChange={handleOnChangeTipComponent} />
                    </div>
                </form>
            </div>
        </>
    }
    return <>
        <div id="TipContainer">
            <h3>Tip:</h3>
            <p>Select the percentage you want to tip</p>
            <form id="TipForm">
                <div className="tipOption">
                    <label htmlFor="tip-0">0%</label>
                    <input type="radio" name="tip" id="tip-0" value={0} onChange={handleOnChangeTipComponent} />
                </div>
                <div className="tipOption">
                    <label htmlFor="tip-10">10%</label>
                    <input type="radio" name="tip" id="tip-10" value={0.1} onChange={handleOnChangeTipComponent} />
                </div>
                <div className="tipOption">
                    <label htmlFor="tip-20">20%</label>
                    <input type="radio" name="tip" id="tip-20" value={0.2} onChange={handleOnChangeTipComponent} />
                </div>
                <div className="tipOption">
                    <label htmlFor="tip-50">50%</label>
                    <input type="radio" name="tip" id="tip-50" value={0.5} onChange={handleOnChangeTipComponent} />
                </div>
            </form>
        </div>
    </>
}