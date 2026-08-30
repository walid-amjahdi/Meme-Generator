export function InputField(props)
{
    return (
        <>
            <form action="">
                <label htmlFor={props.input}>{props.input}</label>
                <input type="text" placeholder={props.input} value={props.value} id={props.input} onChange={props.typing}/>
            </form>

        </>
    )
}