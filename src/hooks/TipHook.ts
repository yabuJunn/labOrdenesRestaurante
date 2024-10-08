import { useState } from "react"

export const useTip = () => {
    const [tip, setTip] = useState(0)

    const handleSetTip = (newTipValue: number) => {
        setTip(newTipValue)
    }

    const handleOnChangeTipComponent = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(parseFloat(e.target.value))
        handleSetTip(parseFloat(e.target.value))
    }

    return {
        tip,
        handleSetTip,
        handleOnChangeTipComponent
    }
}