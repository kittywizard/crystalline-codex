function handleClick(e) {
    e.preventDefault();
    
    //run function to generate stats?
    
}

const Button = (props) => <button className={props.className} id={props.id} onClick={handleClick}>{props.name}</button>;

export default Button;