function Button(props) {
    function generateEvent(e) {
        e.preventDefault();
        console.log('button clicked');
    }
    return (
        <button className={props.className} id={props.id} onClick={props.event}>{props.name}</button>
    )
}

export default Button;