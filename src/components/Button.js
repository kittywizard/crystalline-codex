function generateEvent(e) {
    e.preventDefault();
    console.log('button clicked');
}

const Button = (props) => <button className={props.className} id={props.id} onClick={generateEvent}>{props.name}</button>;

export default Button;