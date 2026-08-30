import { useState } from "react"
import { InputField } from "./InputField"

export function Main()
{
    const [topValue,setTopValue] = useState("")
    const [bottomValue,setBottomValue] = useState("")

    return (
        <>
            <InputField input="Top text" />  
            <InputField input="Bottom text" />  
            <button className="SubmitButton">Get the Meme</button>
        </>
    )
}