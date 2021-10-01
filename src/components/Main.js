import Button from './Button';

function Main(props) {
return (
    <main className="container content">
    <Button id="submit" className="btn" name="Roll?" event={generateEvent}/>

    <div className="container results">
        <div className="characterInfo">
        </div>

        <div className="statInfo">
        </div>
    </div>
</main>
)
}

export default Main;