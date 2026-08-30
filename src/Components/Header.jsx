import  logo  from '../Imgs/meme_surprised_shocked_pikachu.png'

export function Header()
{
    return (
        <>
            <header>
                <img src={logo} alt="pikatchu" />
                <h3>Meme Generator</h3>
            </header>
        </>
    )
}