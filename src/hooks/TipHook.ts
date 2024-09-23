import { useState } from "react"

export const useTip = () => {
    const [tip, setTip] = useState(0)

    const handleSetTip = (newTipValue: number) => {
        setTip(newTipValue)
    }

    return {
        tip,
        handleSetTip
    }
}