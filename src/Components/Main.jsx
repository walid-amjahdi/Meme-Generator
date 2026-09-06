import { useState } from "react"
import { InputField } from "./InputField"

export function Main()
{
    const [topValue,setTopValue] = useState("")
    const [bottomValue,setBottomValue] = useState("")

    return (
        <>
        <main>
            <div className="Inputfield">
                <InputField input="Top text" value={topValue} typing={(event)=>{setTopValue(
                    event.target.value
                )}}/>  
                <InputField input="Bottom text" value={bottomValue} typing={(event)=>{setBottomValue(
                    event.target.value
                )}}/>  
            </div>
            <button className="SubmitButton">Get the Meme</button>
        </main>
        </>
    )
}