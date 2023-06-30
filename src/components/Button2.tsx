
interface Props {
    text: string;
    handleClick: () => void;
}

export default function Button2 (props: Props) {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}