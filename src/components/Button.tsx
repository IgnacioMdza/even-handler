
interface Props {
    text: string;
}

export default function Button (props: Props) {
    const handleClick = () => {
        alert('Woff 🐶')
    }
    return (
        // Evento pasando funcion o declarando una arrow function dentro
        
        // <button onClick={() => alert('clicked')}>
        //     {props.text}
        // </button>
        <button onClick={handleClick}>
            {props.text}
        </button>
    )
}